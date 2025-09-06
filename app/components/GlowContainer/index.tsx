import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/lib/utils';

export default function GlowContainer({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center gap-3 rounded-2xl px-4 py-3',
        'border border-white/10 text-center font-medium text-white transition',
        className
      )}
      {...props}
    >
      {children}
      <div
        className="absolute inset-0"
        style={{
          filter: 'url(#prefix__prefix__filter1_ddf_134_3428)',
        }}
      >
        <div
          className="size-full rounded-2xl bg-linear-[3.07deg] from-white to-white/10"
          style={{
            clipPath: 'url(#myCustomShape)',
          }}
        />
      </div>
    </div>
  );
}
