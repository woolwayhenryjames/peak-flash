import { useEffect, useRef } from "react";
import { Link } from "react-router";
import adImageDesktop from "./assets/ad.avif";
import adImageMobile from "./assets/ad-m.avif";

export default function PopupAd() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Show the ad after a delay when component mounts, but only if it hasn't been dismissed recently
  useEffect(() => {
    // Check if the ad was already shown and dismissed within the last day
    const lastDismissed = sessionStorage.getItem("adLastDismissed");
    if (!lastDismissed) {
      const timer = setTimeout(() => {
        dialogRef.current?.showModal();
      }, 2000); // 2 second delay before showing

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle dismissing the ad
  const handleDismiss = () => {
    sessionStorage.setItem("adLastDismissed", Date.now().toString());
    dialogRef.current?.close();
  };

  return (
    <dialog className="modal z-0" onClose={handleDismiss} ref={dialogRef}>
      <div className="modal-box relative flex w-full max-w-[937px] flex-col items-center gap-8 bg-transparent p-0 shadow-none">
        <button
          className={"absolute top-0 right-2.5 md:top-2.5"}
          onClick={handleDismiss}
          type="button"
        >
          <svg
            className="size-7 md:size-10"
            fill="none"
            viewBox="0 0 43 43"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <rect
              height="41.6667"
              rx="20.8333"
              stroke="white"
              width="41.6667"
              x="0.498779"
              y="0.5"
            />
            <path
              d="M13.8654 30.6667L11.9988 28.8L19.4654 21.3333L11.9988 13.8667L13.8654 12L21.3321 19.4667L28.7988 12L30.6654 13.8667L23.1988 21.3333L30.6654 28.8L28.7988 30.6667L21.3321 23.2L13.8654 30.6667Z"
              fill="white"
            />
          </svg>
        </button>
        <img
          alt="Advertisement"
          className="hidden md:flex"
          src={adImageDesktop}
        />
        <img
          alt="Advertisement"
          className="flex md:hidden"
          src={adImageMobile}
        />
        <Link
          className="absolute bottom-0 h-24 w-full"
          onClick={handleDismiss}
          prefetch="intent"
          to="/u/ascent"
          viewTransition
        />
      </div>
      <form className="modal-backdrop" method="dialog">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
