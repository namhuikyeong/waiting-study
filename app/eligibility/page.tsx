"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStudy } from "@/lib/StudyContext";
import { EXTERNAL_SURVEYS, GOOGLE_FORM_ENTRY, assignSequence } from "@/lib/config";
import { t } from "@/lib/i18n";
import ExternalSurveyGate from "@/components/ExternalSurveyGate";
import StepProgress from "@/components/StepProgress";

export default function EligibilityPage() {
  const router = useRouter();
  const { country, participantId, setSequence, ready } = useStudy();
  const [assigning, setAssigning] = useState(false);

  useEffect(() => {
    if (ready && !country) router.replace("/country");
  }, [ready, country, router]);

  if (!ready || !country) return null;

  const d = t(country);

  function handleContinue() {
    setAssigning(true);
    const seq = assignSequence();
    setSequence(seq);
    window.setTimeout(() => router.push("/booking"), 900);
  }

  if (assigning) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 h-8 w-8 animate-spin rounded-full border-[3px] border-navy-900/15 border-t-navy-900" />
        <p className="text-sm text-navy-900/60">{d.assigning}</p>
      </div>
    );
  }

  return (
    <>
      <StepProgress country={country} current={0} />
      <ExternalSurveyGate
        country={country}
        title={d.eligibilityTitle}
        body={d.eligibilityBody}
        surveyUrl={EXTERNAL_SURVEYS.eligibility[country]}
        participantId={participantId}
        entryId={GOOGLE_FORM_ENTRY.eligibility[country]}
        onContinue={handleContinue}
      />
    </>
  );
}
