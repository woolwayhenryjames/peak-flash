import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import GlowContainer from "~/components/GlowContainer";
import DialogWithCloseButton from "../DialogWithCloseButton";

export default function SubmitVideoDialog({
  show,
  setShow,
  id,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  id?: string;
}) {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState<string>("");
  const fetcher = useFetcher();

  // Handle fetcher state changes
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      if (fetcher.data.success) {
        // Success - close dialog and reset form
        setVideoUrl("");
        setError("");
        setShow(false);
      } else {
        // Error from server
        setError(fetcher.data.error || "Failed to submit video");
      }
    }
  }, [fetcher.state, fetcher.data, setShow]);

  const onSubmit = () => {
    // Reset error state
    setError("");

    // Basic validation
    if (!videoUrl.trim()) {
      setError("Video URL is required");
      return;
    }

    if (!id) {
      setError("Campaign ID is missing");
      return;
    }

    fetcher.submit(
      { campaignId: id, videoUrl: videoUrl.trim() },
      { method: "post", action: "/api/submitVideo" }
    );
  };
  return (
    <DialogWithCloseButton className="min-w-80" setShow={setShow} show={show}>
      <div className="pb-3 font-medium text-white text-xl">Submit Video</div>
      <div className="font-medium text-[#e2e2e2] text-xs">TikTok Video URL</div>
      <input
        className="w-full rounded-sm border border-[#4e5d93] px-2.5 py-2 text-[#7c7c7c] text-xs"
        disabled={fetcher.state === "submitting"}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="https://www.tiktok.com/@username/video/1234567890"
        type="text"
        value={videoUrl}
      />
      {error && (
        <div className="px] font-normal text-[#ff6060] text-[10">{error}</div>
      )}
      <div className="font-light text-[#fdff8e] text-[10px]">
        * Reminder: Only submit your link manually if your video hasn’t been
        detected after 48 hours.
      </div>
      <div className="flex flex-col">
        <button
          className="self-end"
          disabled={fetcher.state === "submitting"}
          onClick={onSubmit}
          type="button"
        >
          <GlowContainer className="px-8 py-3">
            {fetcher.state === "submitting" ? "Submitting..." : "Submit"}
          </GlowContainer>
        </button>
      </div>
    </DialogWithCloseButton>
  );
}
