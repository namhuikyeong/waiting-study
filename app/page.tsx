"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-wide text-gold-500">
        Seoul Airlines · 首爾航空
      </p>

      <h1 className="mt-3 font-display text-[28px] font-medium leading-snug text-navy-900">
        온라인 대기 화면 사용자 경험 연구
        <br />
        <span className="text-navy-900/60 text-2xl">線上等待畫面使用者體驗研究</span>
      </h1>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-900/70">
        <p>
          이 웹사이트는 온라인 항공권 예매 과정에서 나타나는 대기 화면이 사용자 경험에 미치는
          영향을 알아보는 연구용 프로토타입입니다. 실제 결제는 이루어지지 않습니다.
        </p>
        <p className="border-t border-navy-900/10 pt-4">
          本網站是一個研究用原型，用於探討線上機票預訂過程中的等待畫面如何影響使用者體驗。本網站不會產生實際付款行為。
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-card bg-mist px-4 py-3 text-xs text-navy-900/60">
        <span>예상 소요 시간 · 預估所需時間</span>
        <span className="font-medium text-navy-900">10–15 min</span>
      </div>

      <Link
        href="/country"
        className="focus-ring mt-8 flex items-center justify-center rounded-card bg-navy-900 py-3.5 text-[15px] font-medium text-paper transition hover:bg-navy-800"
      >
        참여 시작하기 · 開始參與
      </Link>
    </div>
  );
}
