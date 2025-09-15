import { Fragment, useMemo, useState } from 'react';
import Markdown from 'react-markdown';
import GlowContainer from '~/components/GlowContainer';

export default function VideoRequirementsContent({
  joinRequirement,
}: {
  joinRequirement?: unknown;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };
  const requirements: [string, unknown][] = useMemo(() => {
    try {
      const requirementsObj =
        typeof joinRequirement === 'string'
          ? JSON.parse(joinRequirement)
          : (joinRequirement ?? {});
      return Object.entries(requirementsObj);
    } catch {
      return [];
    }
  }, [joinRequirement]);
  return requirements.map(([key, value]) => (
    <Fragment key={key}>
      <div className="h-6 w-px border-gray-600 border-l border-dashed" />
      <div className="w-full rounded-xl border border-gray-700 bg-black/50 p-6">
        <div className="flex justify-between">
          <h4 className="mb-3 font-medium text-gray-100">{key}</h4>
          {Array.isArray(value) && (
            <GlowContainer
              className="w-fit cursor-pointer rounded-sm px-3 py-1 text-sm"
              noShimmer
              onClick={() => handleCopyLink(value.join(', '))}
            >
              {isCopied ? 'Copied!' : 'Copy'}
            </GlowContainer>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {Array.isArray(value) &&
            value.map((tag) => (
              <div
                className="rounded-lg border border-gray-600 px-3 py-1"
                key={tag}
              >
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text font-light text-sm text-transparent">
                  #{tag}
                </span>
              </div>
            ))}
          {typeof value === 'string' && (
            <div className="text-gray-500 text-sm [&_*]:list-image-[linear-gradient(114deg,#FFA44A_12.87%,#69D7FF_51.12%)]">
              <Markdown>{value}</Markdown>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  ));
}
