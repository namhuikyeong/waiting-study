// ---------------------------------------------------------------------------
// Central configuration for the study.
// Replace every REPLACE_* placeholder with your real Google Forms and Figma
// prototype links before deploying.
// ---------------------------------------------------------------------------

export type CountryCode = "KR" | "TW";
export type SequenceId = 1 | 2;

export const EXTERNAL_SURVEYS = {
  // Screening / eligibility survey ("KR-1" / "TW-1"), one per language.
  eligibility: {
    KR: "https://docs.google.com/forms/d/e/1FAIpQLSdZ9wZvVBkVqszDVnprYaENJtfOARA5YzaGfNPOLXvF0G82UA/viewform",
    TW: "https://docs.google.com/forms/d/e/1FAIpQLSdTCuFwcpJYe7iOQFjes6fatVl8KmG6poXE7pLkJBg4sdOlNA/viewform",
  },
  // Post-questionnaire shown after Figma prototype Test 1 ("KR-2" / "TW-2").
  post1: {
    KR: "https://docs.google.com/forms/d/e/1FAIpQLSdP-xC9VvIL23jvXm-m5kiP0FMyo1xS-yQGPjL8Zwvj9zcLHA/viewform",
    TW: "https://docs.google.com/forms/d/e/1FAIpQLSenf4g59P-K6a3tUj6J77s2RG2PrkZ4R-igG8lEkULVNbuFJw/viewform",
  },
  // Post-questionnaire shown after Figma prototype Test 2 ("KR-3" / "TW-3")
  // — includes manipulation checks / debriefing-adjacent items.
  post2: {
    KR: "https://docs.google.com/forms/d/e/1FAIpQLSewc7CIqlc9B2udK__T5QVZpJ2-EXtn9m7OcFsVzcNUsBfRxQ/viewform",
    TW: "https://docs.google.com/forms/d/e/1FAIpQLScgOdgSk9s1mSgT4_syM2Ur9P5iY1hKOS3gd95aEpoVjfYfgg/viewform",
  },
} as const;

/**
 * The four Figma pages you already have — "Korean ver. seq 1",
 * "Korean ver. seq 2", "Taiwan ver. seq 1", "Taiwan ver. seq 2" — each
 * contains the full Test 1 -> waiting screen -> Test 2 -> waiting screen
 * flow for that (country, sequence) combination, already in the correct
 * language and screen order.
 *
 * `task1` / `task2` should be Figma prototype "present" links pointed at
 * the starting frame of each task within that page, e.g.:
 *   https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot
 *     ?page-id=<PAGE_ID>&node-id=<TASK_START_NODE_ID>&starting-point-node-id=<TASK_START_NODE_ID>
 *
 * To get these: open the page in Figma, select the starting frame for the
 * task, click "Present" (▶) — Figma copies a link scoped to that frame.
 */
export const FIGMA_PROTOTYPES: Record<
  CountryCode,
  Record<SequenceId, { task1: string; task2: string }>
> = {
  KR: {
    1: {
      task1: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=146-3691&t=T8c3yLjfAr89rEoG-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2486&starting-point-node-id=146%3A3691&show-proto-sidebar=1",
      task2: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=146-3791&t=T8c3yLjfAr89rEoG-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2486&starting-point-node-id=146%3A3791&show-proto-sidebar=1",
    },
    2: {
      task1: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot?node-id=151-5407&t=T8c3yLjfAr89rEoG-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2488&starting-point-node-id=151%3A5407&show-proto-sidebar=1&fuid=1575079788089250868",
      task2: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=151-7000&t=T8c3yLjfAr89rEoG-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2488&starting-point-node-id=151%3A7000&show-proto-sidebar=1",
    },
  },
  TW: {
    1: {
      task1: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=151-9475&t=T8c3yLjfAr89rEoG-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2487&starting-point-node-id=151%3A9475&show-proto-sidebar=1",
      task2: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=151-9545&t=5JuQUxG4V8YOqnYl-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2487&starting-point-node-id=151%3A9545&show-proto-sidebar=1",
    },
    2: {
      task1: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot?node-id=151-11829&t=1EPdsY58Lii4wyLf-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2489&starting-point-node-id=151%3A11829&show-proto-sidebar=1&fuid=1575079788089250868",
      task2: "https://www.figma.com/proto/ZoyZFD9pytG0PKglauTavU/wireframe-pilot-?node-id=151-12878&t=1EPdsY58Lii4wyLf-0&scaling=min-zoom&content-scaling=fixed&page-id=129%3A2489&starting-point-node-id=151%3A12878&show-proto-sidebar=1",
    },
  },
};

// Task 1: home country -> Tokyo (shown on the gate page as a reminder of
// the task conditions before opening the Figma prototype).
export const TASK_1 = {
  originByCountryLocal: { KR: "서울 (ICN)", TW: "台北 (TPE)" } as Record<CountryCode, string>,
  destinationLocal: { KR: "도쿄 (NRT)", TW: "東京 (NRT)" } as Record<CountryCode, string>,
  dateLocal: { KR: "2026년 9월 14일", TW: "2026年9月14日" } as Record<CountryCode, string>,
  passengers: 1,
  timePreference: "morning" as const,
  seatPreference: "window" as const,
};

// Task 2: Tokyo -> home country
export const TASK_2 = {
  originLocal: { KR: "도쿄 (NRT)", TW: "東京 (NRT)" } as Record<CountryCode, string>,
  destinationByCountryLocal: { KR: "서울 (ICN)", TW: "台北 (TPE)" } as Record<CountryCode, string>,
  dateLocal: { KR: "2026년 9월 20일", TW: "2026年9月20日" } as Record<CountryCode, string>,
  passengers: 1,
  timePreference: "afternoon" as const,
  seatPreference: "aisle" as const,
};

/**
 * Google Forms supports pre-filling a short-answer question via a URL
 * parameter, using that question's numeric "entry ID": `?entry.<ID>=<value>`.
 *
 * Setup per form (all 6 — KR-1/2/3 and TW-1/2/3):
 *   1. Add a short-answer question near the top, e.g. "참여자 코드"
 *      (make it required).
 *   2. Fill in a test value, then ⋮ menu → "미리 채워진 링크 받기"
 *      (Get pre-filled link).
 *   3. The generated URL contains `entry.1234567890=<your test value>` —
 *      copy just the number and paste it into GOOGLE_FORM_ENTRY below,
 *      in the matching slot.
 * If you also add a "시퀀스" short-answer question, repeat the same steps
 * and fill in GOOGLE_FORM_SEQ_ENTRY (optional, but handy for a quick
 * counterbalancing sanity check in your data).
 */
export const GOOGLE_FORM_ENTRY: Record<
  "eligibility" | "post1" | "post2",
  Record<CountryCode, string>
> = {
  eligibility: { KR: "505855732", TW: "906211069" },
  post1: { KR: "422830564", TW: "241409051" },
  post2: { KR: "1919190319", TW: "2127659155" },
};

export const GOOGLE_FORM_SEQ_ENTRY: Record<
  "eligibility" | "post1" | "post2",
  Record<CountryCode, string>
> = {
  eligibility: { KR: "", TW: "" }, // usually not needed before sequence is assigned
  post1: { KR: "1330388612", TW: "1806003064" },
  post2: { KR: "971125296", TW: "2137921177" },
};

export function buildSurveyUrl(
  baseUrl: string,
  participantId: string | null,
  entryId: string | undefined,
  sequence?: SequenceId | null,
  seqEntryId?: string,
): string {
  if (!participantId || !entryId || entryId.startsWith("REPLACE_")) return baseUrl;
  const sep = baseUrl.includes("?") ? "&" : "?";
  let url = `${baseUrl}${sep}usp=pp_url&entry.${entryId}=${encodeURIComponent(participantId)}`;
  if (sequence && seqEntryId && !seqEntryId.startsWith("REPLACE_")) {
    url += `&entry.${seqEntryId}=${sequence}`;
  }
  return url;
}

/**
 * Randomly assigns a participant to counterbalancing sequence 1 or 2
 * (50/50, cryptographically random), independent of country.
 */
export function assignSequence(): SequenceId {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0] % 2 === 0 ? 1 : 2;
}
