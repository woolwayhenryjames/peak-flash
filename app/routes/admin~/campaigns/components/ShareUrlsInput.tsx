import { useState } from "react";

export function ShareUrlsInput({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: Array<{ url: string; icon: string }>;
}) {
  const defaultShareUrls = [
    { url: "http://x.com/@example", icon: "/assets/user-upload/x.svg" },
    { url: "http://t.me/example", icon: "/assets/user-upload/tg.svg" },
    {
      url: "http://discord.gg/@example",
      icon: "/assets/user-upload/discord.svg",
    },
  ];

  // Add unique IDs to prevent focus issues
  const [shareUrls, setShareUrls] = useState<
    Array<{ id: string; url: string; icon: string }>
  >(() => {
    const initialUrls = defaultValue || defaultShareUrls;
    return initialUrls.map((item, index) => ({
      id: `share-url-${Date.now()}-${index}`,
      ...item,
    }));
  });

  const addShareUrl = () => {
    setShareUrls((prev) => [
      ...prev,
      { id: `share-url-${Date.now()}-${prev.length}`, url: "", icon: "" },
    ]);
  };

  const removeShareUrl = (id: string) => {
    setShareUrls((prev) => prev.filter((item) => item.id !== id));
  };

  const updateShareUrl = (id: string, field: "url" | "icon", value: string) => {
    setShareUrls((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {shareUrls.map((shareUrl, index) => (
          <div
            className="rounded-lg border border-gray-600 p-4"
            key={shareUrl.id}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium text-sm text-white">
                Share URL #{index + 1}
              </span>
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-white text-xs hover:bg-red-700"
                onClick={() => removeShareUrl(shareUrl.id)}
                type="button"
              >
                Remove
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label
                  className="mb-1 block text-gray-400 text-xs"
                  htmlFor={`url-${shareUrl.id}`}
                >
                  URL
                </label>
                <input
                  className="w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                  id={`url-${shareUrl.id}`}
                  onChange={(e) =>
                    updateShareUrl(shareUrl.id, "url", e.target.value)
                  }
                  placeholder="https://example.com/@username"
                  type="url"
                  value={shareUrl.url}
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-gray-400 text-xs"
                  htmlFor={`icon-${shareUrl.id}`}
                >
                  Icon Path
                </label>
                <div className="flex max-md:flex-col">
                  <div className="flex flex-1 items-center gap-2">
                    {shareUrl.icon &&
                      (shareUrl.icon.startsWith("/assets") ||
                        shareUrl.icon.startsWith("http")) && (
                        <img
                          alt="Icon preview"
                          className="size-14 rounded object-contain"
                          src={shareUrl.icon}
                        />
                      )}
                    <div>
                      <label
                        className="block text-gray-400 text-xs"
                        htmlFor={`icon-file-${shareUrl.id}`}
                      >
                        Upload Icon File
                      </label>
                      <input
                        accept="image/*"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-indigo-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id={`icon-file-${shareUrl.id}`}
                        name={`icon-${shareUrl.id}`}
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="divider lg:divider-horizontal lg:gap-1!">
                    OR
                  </div>
                  <div className="flex-1">
                    <label
                      className="block text-gray-400 text-xs"
                      htmlFor={`icon-url-${shareUrl.id}`}
                    >
                      Enter Icon Path/URL
                    </label>
                    <input
                      className="w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                      id={`icon-url-${shareUrl.id}`}
                      onChange={(e) =>
                        updateShareUrl(shareUrl.id, "icon", e.target.value)
                      }
                      placeholder="/assets/user-upload/platform.svg"
                      type="text"
                      value={shareUrl.icon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
        onClick={addShareUrl}
        type="button"
      >
        Add Share URL
      </button>

      {/* Hidden input that contains the shareUrls data - strip IDs before serializing */}
      <input
        name={name}
        type="hidden"
        value={JSON.stringify(shareUrls.map(({ id, ...rest }) => rest))}
      />
    </div>
  );
}
