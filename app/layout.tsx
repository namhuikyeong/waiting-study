import type { Metadata } from "next";
import "./globals.css";
import { StudyProvider } from "@/lib/StudyContext";

// NOTE: We deliberately rely on the OS-provided CJK font stack (see
// `--font-sans` / `--font-display` in globals.css) instead of next/font,
// since Google's hosted Noto Sans KR does not reliably cover Traditional
// Chinese glyphs needed for the Taiwanese-language UI, and device-native
// fonts (Apple SD Gothic Neo / PingFang TC / Malgun Gothic / MS JhengHei)
// render both languages correctly out of the box.

export const metadata: Metadata = {
  title: "온라인 항공권 예매 서비스 이용 경험 조사 · 線上機票預訂服務使用經驗調查",
  description: "Online flight-booking service user experience survey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <StudyProvider>{children}</StudyProvider>
      </body>
    </html>
  );
}
