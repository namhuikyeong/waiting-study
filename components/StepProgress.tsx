"use client";

import type { CountryCode } from "@/lib/config";
import { STEP_LABELS } from "@/lib/i18n";

export default function StepProgress({
  country,
  current,
}: {
  country: CountryCode;
  current: number; // 0-indexed: 0..4
}) {
  const labels = STEP_LABELS[country];
  const lastIndex = labels.length - 1;
  const progressPct = (current / lastIndex) * 80;

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-6">
      <div className="relative">
        <div className="absolute left-[10%] right-[10%] top-[5px] h-px bg-navy-900/15" aria-hidden />
        <div
          className="absolute left-[10%] top-[5px] h-px bg-navy-900 transition-all"
          style={{ width: `${progressPct}%` }}
          aria-hidden
        />
        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
          {labels.map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span
                className={`h-[11px] w-[11px] rounded-full border-2 bg-paper ${
                  i <= current ? "border-navy-900 bg-navy-900" : "border-navy-900/25"
                }`}
              />
              <span
                className={`text-center text-[10px] leading-tight ${
                  i <= current ? "font-medium text-navy-900" : "text-navy-900/35"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
