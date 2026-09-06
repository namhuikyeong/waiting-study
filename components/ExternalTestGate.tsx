"use client";

import type { CountryCode } from "@/lib/config";
import { t } from "@/lib/i18n";

type Condition = {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
  timePref: "morning" | "afternoon";
  seatPref: "window" | "aisle";
};

export default function ExternalTestGate({
  country,
  heading,
  figmaUrl,
  condition,
  onContinue,
}: {
  country: CountryCode;
  heading: string;
  figmaUrl: string;
  condition: Condition;
  onContinue: () => void;
}) {
  const d = t(country);

  const rows: [string, string][] = [
    [d.origin, condition.origin],
    [d.destination, condition.destination],
    [d.date, condition.date],
    [d.passengers, `${condition.passengers}${d.passengersUnit}`],
    [d.timePref, condition.timePref === "morning" ? d.morning : d.afternoon],
    [d.seatPref, condition.seatPref === "window" ? d.window : d.aisle],
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-wide text-gold-500">{heading}</p>
      <h1 className="mt-1 font-display text-xl font-medium text-navy-900">{d.testIntroBody}</h1>

      <dl className="mt-6 space-y-3 rounded-card border border-navy-900/10 bg-mist px-4 py-4 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-navy-900/10 pb-2 last:border-0 last:pb-0">
            <dt className="text-navy-900/60">{label}</dt>
            <dd className="font-medium text-navy-900">{value}</dd>
          </div>
        ))}
      </dl>

      <a
        href={figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-8 flex items-center justify-center gap-2 rounded-card bg-navy-900 py-3 text-sm font-medium text-paper transition hover:bg-navy-800"
      >
        {d.goToTest}
        <span aria-hidden>↗</span>
      </a>

      <button
        onClick={onContinue}
        className="focus-ring mt-3 rounded-card border border-navy-900/20 py-3 text-sm font-medium text-navy-900 transition hover:bg-mist"
      >
        {d.testDone}
      </button>
    </div>
  );
}
