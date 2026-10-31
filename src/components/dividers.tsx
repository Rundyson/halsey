import { cn } from "@/lib/utils";

/** Gentle wave ridge used between light sections. Color it with text-<color> (fill = currentColor). */
export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={cn("block h-[48px] w-full sm:h-[70px]", className)}
      aria-hidden="true"
    >
      <path
        d="M0,52 C180,92 360,12 560,36 C760,60 900,86 1080,56 C1240,30 1360,44 1440,58 L1440,90 L0,90 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Jagged mountain-silhouette ridge. Color it with text-<color> (fill = currentColor). */
export function MountainDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className={cn("block h-[56px] w-full sm:h-[84px]", className)}
      aria-hidden="true"
    >
      <path
        d="M0,110 L0,72 L110,34 L230,66 L360,18 L480,58 L610,26 L730,64 L860,30 L980,68 L1100,38 L1220,64 L1330,42 L1440,70 L1440,110 Z"
        fill="currentColor"
      />
    </svg>
  );
}
