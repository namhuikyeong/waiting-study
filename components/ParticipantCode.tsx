"use client";

import { useState } from "react";
import type { CountryCode } from "@/lib/config";
import { t } from "@/lib/i18n";

export default function ParticipantCode({
  country,
  participantId,
}: {
  country: CountryCode;
  participantId: string;
}) {
  const d = t(country);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(participantId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — the code is still visible to copy manually
    }
  }

  return (
    <div className="mt-6 rounded-card border border-gold-500/30 bg-gold-100/50 px-4 py-3">
      <p className="text-xs font-medium tracking-wide text-navy-900/50">{d.yourCode}</p>
      <div className="mt-1 flex items-center justify-between gap-3">
        <span className="font-display text-lg font-medium tracking-wide text-navy-900">
          {participantId}
        </span>
        <button
          onClick={copy}
          className="focus-ring shrink-0 rounded-card border border-navy-900/20 px-3 py-1.5 text-xs font-medium text-navy-900 transition hover:bg-white"
        >
          {copied ? d.copied : d.copyCode}
        </button>
      </div>
      <p className="mt-2 text-xs text-navy-900/50">{d.codeInstruction}</p>
    </div>
  );
}
