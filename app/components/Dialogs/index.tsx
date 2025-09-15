import { useEffect, useRef } from 'react';
import { cn } from '~/lib/utils';

export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  show: boolean;
  setShow: (show: boolean) => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  topLayer?: boolean;
}

export default function Dialog({
  show,
  setShow,
  title,
  children,
  className,
  topLayer = false,
  ...props
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
      className="modal z-50 max-md:px-5"
      onClose={() => setShow(false)}
      ref={dialogRef}
    >
      <div
        className={cn(
          'modal-box flex max-h-[80vh] w-auto max-w-[80vh] flex-col gap-4 bg-[#414442] p-7 md:bg-[#202020]',
          className
        )}
        {...props}
      >
        {title && (
          <div className="white-gradient-text font-medium text-xl">{title}</div>
        )}
        {show && children}
      </div>
      <form className="modal-backdrop" method="dialog">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
