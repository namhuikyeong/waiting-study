"use client";

import { useRouter } from "next/navigation";
import { useStudy } from "@/lib/StudyContext";
import type { CountryCode } from "@/lib/config";

export default function CountryPage() {
  const router = useRouter();
  const { setCountry } = useStudy();

  function choose(c: CountryCode) {
    setCountry(c);
    router.push("/eligibility");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF0F7] px-5 py-10">
      <div className="w-full max-w-[360px] rounded-[28px] bg-white px-7 py-9 shadow-[0_20px_50px_-12px_rgba(30,41,79,0.18)]">
        <h1 className="font-display text-[26px] font-bold leading-snug text-navy-900">
          Please Select
          <br />
          your Nationality
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
          당신의 국적을 선택해주세요
          <br />
          請選擇您的國籍
        </p>

        <div className="mt-9 grid grid-cols-2 gap-4">
          <button
            onClick={() => choose("KR")}
            className="focus-ring flex flex-col items-center gap-3 rounded-2xl border border-navy-900/15 px-3 py-6 transition hover:border-navy-900/40 hover:shadow-md"
          >
            <span className="text-4xl leading-none" aria-hidden>
              🇰🇷
            </span>
            <span className="h-px w-10 bg-navy-900/15" aria-hidden />
            <span className="text-center">
              <span className="block text-[15px] font-semibold text-navy-900">대한민국</span>
              <span className="mt-0.5 block text-xs text-navy-900/45">South Korea</span>
            </span>
          </button>

          <button
            onClick={() => choose("TW")}
            className="focus-ring flex flex-col items-center gap-3 rounded-2xl border border-navy-900/15 px-3 py-6 transition hover:border-navy-900/40 hover:shadow-md"
          >
            <span className="text-4xl leading-none" aria-hidden>
              🇹🇼
            </span>
            <span className="h-px w-10 bg-navy-900/15" aria-hidden />
            <span className="text-center">
              <span className="block text-[15px] font-semibold text-navy-900">台灣</span>
              <span className="mt-0.5 block text-xs text-navy-900/45">Taiwan</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
