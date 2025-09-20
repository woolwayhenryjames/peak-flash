import { useEffect, useRef } from 'react';
import { cn } from '~/lib/utils';

export interface DialogProps {
  show: boolean;
  setShow: (show: boolean) => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  topLayer?: boolean;
  closeButtonClassName?: string;
}

export default function MobileBottomDialog({
  show,
  setShow,
  title,
  children,
  className,
  topLayer = false,
  closeButtonClassName,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (show) {
      if (topLayer) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.show();
      }
    } else {
      dialogRef.current?.close();
    }
  }, [show, topLayer]);
  return (
    <dialog
      className="modal z-50 items-end"
      onClose={() => setShow(false)}
      ref={dialogRef}
    >
      <div
        className={cn(
          'modal-box max-h-[60vh] w-full rounded-t-xl border border-[#84a0ff] p-3 text-[#EDEDED]',
          className
        )}
        style={{
          background:
            'linear-gradient(-18deg, rgba(0, 0, 0, 1) 43%, rgba(42, 38, 89, 1) 90%, rgba(53, 93, 191, 1) 100%)',
        }}
      >
        <button
          className={cn('absolute top-2.5 right-2.5', closeButtonClassName)}
          onClick={() => setShow(false)}
          type="button"
        >
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M15.2806 14.2194C15.3502 14.2891 15.4055 14.3718 15.4432 14.4629C15.4809 14.5539 15.5003 14.6515 15.5003 14.7501C15.5003 14.8486 15.4809 14.9462 15.4432 15.0372C15.4055 15.1283 15.3502 15.211 15.2806 15.2807C15.2109 15.3504 15.1281 15.4056 15.0371 15.4433C14.9461 15.4811 14.8485 15.5005 14.7499 15.5005C14.6514 15.5005 14.5538 15.4811 14.4628 15.4433C14.3717 15.4056 14.289 15.3504 14.2193 15.2807L7.99993 9.06036L1.78055 15.2807C1.63982 15.4214 1.44895 15.5005 1.24993 15.5005C1.05091 15.5005 0.860034 15.4214 0.719304 15.2807C0.578573 15.1399 0.499512 14.9491 0.499512 14.7501C0.499512 14.551 0.578573 14.3602 0.719304 14.2194L6.93962 8.00005L0.719304 1.78068C0.578573 1.63995 0.499512 1.44907 0.499512 1.25005C0.499512 1.05103 0.578573 0.860156 0.719304 0.719426C0.860034 0.578695 1.05091 0.499634 1.24993 0.499634C1.44895 0.499634 1.63982 0.578695 1.78055 0.719426L7.99993 6.93974L14.2193 0.719426C14.36 0.578695 14.5509 0.499634 14.7499 0.499634C14.949 0.499634 15.1398 0.578695 15.2806 0.719426C15.4213 0.860156 15.5003 1.05103 15.5003 1.25005C15.5003 1.44907 15.4213 1.63995 15.2806 1.78068L9.06024 8.00005L15.2806 14.2194Z"
              fill="#D5D5D5"
            />
          </svg>
        </button>
        {title && (
          <div className="mb-3 border-white/20 border-b pb-5 font-bold text-2xl">
            {title}
          </div>
        )}
        {show && children}
      </div>
      <form className="modal-backdrop" method="dialog">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
