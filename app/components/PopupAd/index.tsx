/** biome-ignore-all lint/a11y/noStaticElementInteractions: the ad should be temperory */
import { useEffect, useRef } from "react";
import DesktopPopupAd from "~/components/PopupAd/desktop";
import MobilePopupAd from "~/components/PopupAd/mobile";

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
  const handleRedirect = () => {
    window.open("/u/lucky", "_blank");
    handleDismiss();
  };

  return (
    <dialog className="modal z-0" onClose={handleDismiss} ref={dialogRef}>
      <DesktopPopupAd
        className="hidden md:flex"
        handleDismiss={handleDismiss}
        handleRedirect={handleRedirect}
      />
      <MobilePopupAd
        className="flex md:hidden"
        handleDismiss={handleDismiss}
        handleRedirect={handleRedirect}
      />
      <form className="modal-backdrop" method="dialog">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
