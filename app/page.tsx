"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-16">

      <h1 className="font-display text-[28px] font-medium leading-snug text-navy-900">
        온라인 항공권 예매 서비스
        <br />
        이용 경험 조사
        <br />
        <span className="text-navy-900/60 text-2xl">線上機票預訂服務使用經驗調查</span>
      </h1>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-900/70">
        <p>
          이 웹사이트는 국립정치대학교(NCCU) 석사학위논문의 일환으로 진행되는 연구 참여
          안내 페이지입니다. 현재 개발 중인 온라인 항공권 예매 서비스에 대한 사용자 여러분의
          실제 이용 경험과 의견을 수집하고자 합니다. 실제 결제는 이루어지지 않습니다.
        </p>
        <p className="border-t border-navy-900/10 pt-4">
          本網站為國立政治大學（NCCU）碩士學位論文之研究參與導覽頁面，旨在蒐集使用者對目前正在開發中的線上機票預訂服務之實際使用經驗與意見。本網站不會產生實際付款行為。
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
