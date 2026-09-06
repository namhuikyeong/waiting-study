"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStudy } from "@/lib/StudyContext";
import { EXTERNAL_SURVEYS, FIGMA_PROTOTYPES, GOOGLE_FORM_ENTRY, GOOGLE_FORM_SEQ_ENTRY, TASK_1, TASK_2 } from "@/lib/config";
import { t } from "@/lib/i18n";
import ExternalTestGate from "@/components/ExternalTestGate";
import ExternalSurveyGate from "@/components/ExternalSurveyGate";
import StepProgress from "@/components/StepProgress";

type Phase = "task1" | "post1" | "task2" | "post2" | "finish";
const PHASE_STORAGE_KEY = "waiting-study-phase";

export default function BookingPage() {
  const router = useRouter();
  const { country, sequence, participantId, ready } = useStudy();
  const [phase, setPhaseState] = useState<Phase>("task1");
  const [phaseReady, setPhaseReady] = useState(false);

  // Persist progress across accidental refreshes/tab closes.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(PHASE_STORAGE_KEY) as Phase | null;
      if (saved) setPhaseState(saved);
    } catch {
      // ignore
    }
    setPhaseReady(true);
  }, []);

  function setPhase(p: Phase) {
    setPhaseState(p);
    try {
      sessionStorage.setItem(PHASE_STORAGE_KEY, p);
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    if (ready && (!country || !sequence)) router.replace("/country");
  }, [ready, country, sequence, router]);

  if (!ready || !phaseReady || !country || !sequence) return null;

  const d = t(country);
  const proto = FIGMA_PROTOTYPES[country][sequence];

  switch (phase) {
    case "task1":
      return (
        <>
          <StepProgress country={country} current={1} />
          <ExternalTestGate
            country={country}
            heading={d.task1Heading}
            figmaUrl={proto.task1}
            condition={{
              origin: TASK_1.originByCountryLocal[country],
              destination: TASK_1.destinationLocal[country],
              date: TASK_1.dateLocal[country],
              passengers: TASK_1.passengers,
              timePref: TASK_1.timePreference,
              seatPref: TASK_1.seatPreference,
            }}
            onContinue={() => setPhase("post1")}
          />
        </>
      );

    case "post1":
      return (
        <>
          <StepProgress country={country} current={2} />
          <ExternalSurveyGate
            country={country}
            title={d.postSurveyTitle}
            body={d.postSurveyBody}
            surveyUrl={EXTERNAL_SURVEYS.post1[country]}
            participantId={participantId}
            entryId={GOOGLE_FORM_ENTRY.post1[country]}
            sequence={sequence}
            seqEntryId={GOOGLE_FORM_SEQ_ENTRY.post1[country]}
            onContinue={() => setPhase("task2")}
          />
        </>
      );

    case "task2":
      return (
        <>
          <StepProgress country={country} current={3} />
          <ExternalTestGate
            country={country}
            heading={d.task2Heading}
            figmaUrl={proto.task2}
            condition={{
              origin: TASK_2.originLocal[country],
              destination: TASK_2.destinationByCountryLocal[country],
              date: TASK_2.dateLocal[country],
              passengers: TASK_2.passengers,
              timePref: TASK_2.timePreference,
              seatPref: TASK_2.seatPreference,
            }}
            onContinue={() => setPhase("post2")}
          />
        </>
      );

    case "post2":
      return (
        <>
          <StepProgress country={country} current={4} />
          <ExternalSurveyGate
            country={country}
            title={d.postSurveyTitle}
            body={d.postSurveyBody}
            surveyUrl={EXTERNAL_SURVEYS.post2[country]}
            participantId={participantId}
            entryId={GOOGLE_FORM_ENTRY.post2[country]}
            sequence={sequence}
            seqEntryId={GOOGLE_FORM_SEQ_ENTRY.post2[country]}
            onContinue={() => setPhase("finish")}
          />
        </>
      );

    case "finish":
      return (
        <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-gold-500">
              <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z" />
            </svg>
          </div>
          <h1 className="font-display text-2xl font-medium text-navy-900">{d.finishTitle}</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-navy-900/70">{d.finishBody}</p>
        </div>
      );
  }
}
