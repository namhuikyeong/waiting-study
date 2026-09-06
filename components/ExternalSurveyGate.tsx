"use client";

import type { CountryCode, SequenceId } from "@/lib/config";
import { buildSurveyUrl } from "@/lib/config";
import { t } from "@/lib/i18n";
import ParticipantCode from "./ParticipantCode";

export default function ExternalSurveyGate({
  country,
  title,
  body,
  surveyUrl,
  participantId,
  entryId,
  sequence,
  seqEntryId,
  onContinue,
}: {
  country: CountryCode;
  title: string;
  body: string;
  surveyUrl: string;
  participantId: string | null;
  entryId?: string;
  sequence?: SequenceId | null;
  seqEntryId?: string;
  onContinue: () => void;
}) {
  const d = t(country);
  const finalUrl = buildSurveyUrl(surveyUrl, participantId, entryId, sequence, seqEntryId);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <h1 className="font-display text-2xl font-medium text-navy-900">{title}</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-navy-900/70">{body}</p>

      {participantId && <ParticipantCode country={country} participantId={participantId} />}

      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-6 flex items-center justify-center gap-2 rounded-card bg-navy-900 py-3 text-sm font-medium text-paper transition hover:bg-navy-800"
      >
        {d.goToSurvey}
        <span aria-hidden>↗</span>
      </a>

      <button
        onClick={() => {
          if (window.confirm(d.confirmSurveyDone)) onContinue();
        }}
        className="focus-ring mt-3 rounded-card border border-navy-900/20 py-3 text-sm font-medium text-navy-900 transition hover:bg-mist"
      >
        {d.surveyDone}
      </button>
    </div>
  );
}
