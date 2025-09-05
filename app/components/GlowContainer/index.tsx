import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/lib/utils';

export default function GlowContainer({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      <svg className="size-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Glow Container Effect Definitions</title>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="myCustomShape">
            <path d="M1 0 H0.068 C0.434 0.127 0.804 0.096 0.895 0.247 C0.934 0.152 0.938 0.116 1 0 Z" />
          </clipPath>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="objectBoundingBox"
            height="100%"
            id="prefix__prefix__filter1_ddf_134_3428"
            width="100%"
            x="0"
            y="0"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="12.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.245192 0 0 0 0 0.421314 0 0 0 0 1 0 0 0 0.57 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_134_3428"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="9" />
            <feGaussianBlur stdDeviation="5.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.954327 0 0 0 0 0.470281 0 0 0 0 0.470281 0 0 0 0.25 0" />
            <feBlend
              in2="effect1_dropShadow_134_3428"
              result="effect2_dropShadow_134_3428"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_134_3428"
              result="shape"
            />
            <feGaussianBlur
              result="effect3_foregroundBlur_134_3428"
              stdDeviation="2"
            />
          </filter>
        </defs>
      </svg>
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
    </>
  );
}
