import GlowContainer from '~/components/GlowContainer';
import DialogWithCloseButton from '../DialogWithCloseButton';

export default function SubmitVideoDialog({
  show,
  setShow,
  id,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  id: string;
}) {
  const onSubmit = () => {
    // TODO: Implement the submit logic here
    return id;
  };
  return (
    <DialogWithCloseButton className="min-w-80" setShow={setShow} show={show}>
      <div className="pb-3 font-medium text-white text-xl">Submit Video</div>
      <div className="font-medium text-[#e2e2e2] text-xs">TikTok Video URL</div>
      <input
        className="rounded-sm border border-[#4e5d93] px-2.5 py-2 text-[#7c7c7c] text-xs"
        placeholder="https://www.tiktok.com/@username/video/1234567890"
        type="text"
      />
      <div className="font-normal text-[#ff6060] text-[10px]">
        *This field is required.
      </div>
      <div className="flex flex-col">
        <button className="self-end" onClick={onSubmit} type="button">
          <GlowContainer className="px-8 py-3">Submit</GlowContainer>
        </button>
      </div>
    </DialogWithCloseButton>
  );
}
