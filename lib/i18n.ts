import type { CountryCode } from "./config";

export interface Dict {
  heroTitle: string;
  heroBody: string;
  start: string;
  estTime: string;
  countryTitle: string;
  countryBody: string;
  countryKR: string;
  countryTW: string;
  eligibilityTitle: string;
  eligibilityBody: string;
  goToSurvey: string;
  surveyDone: string;
  assigning: string;
  yourCode: string;
  codeInstruction: string;
  copyCode: string;
  copied: string;
  origin: string;
  destination: string;
  date: string;
  passengers: string;
  passengersUnit: string;
  timePref: string;
  morning: string;
  afternoon: string;
  seatPref: string;
  window: string;
  aisle: string;
  task1Heading: string;
  task2Heading: string;
  testIntroBody: string;
  goToTest: string;
  testDone: string;
  postSurveyTitle: string;
  postSurveyBody: string;
  finishTitle: string;
  finishBody: string;
}

export const dict: Record<CountryCode, Dict> = {
  KR: {
    heroTitle: "온라인 대기 화면 사용자 경험 연구",
    heroBody:
      "이 웹사이트는 온라인 항공권 예매 과정에서 나타나는 대기 화면이 사용자 경험에 미치는 영향을 알아보는 연구 참여 안내 페이지입니다. 실제 과제는 피그마 프로토타입에서 진행됩니다.",
    start: "참여 시작하기",
    estTime: "예상 소요 시간: 약 10–15분",
    countryTitle: "국가를 선택해 주세요",
    countryBody: "선택한 국가에 따라 이후 화면의 언어와 항공권 여정이 결정됩니다.",
    countryKR: "대한민국",
    countryTW: "대만",
    eligibilityTitle: "참여 자격 확인 설문",
    eligibilityBody:
      "본 연구 참여를 위해서는 먼저 짧은 자격 확인 설문을 완료해야 합니다. 아래 버튼을 눌러 설문을 진행한 뒤, 이 페이지로 돌아와 계속하기를 눌러주세요.",
    goToSurvey: "설문 시작하기 (새 창)",
    surveyDone: "설문을 완료했습니다 — 계속하기",
    assigning: "참여 조건을 배정하는 중입니다…",
    yourCode: "참여자 코드",
    codeInstruction: "설문 첫 문항에 이 코드가 자동으로 입력되어 있어야 합니다. 지워지지 않았는지 확인해 주세요.",
    copyCode: "코드 복사",
    copied: "복사됨",
    origin: "출발지",
    destination: "도착지",
    date: "탑승일",
    passengers: "인원",
    passengersUnit: "명",
    timePref: "출발 시간대",
    morning: "오전",
    afternoon: "오후",
    seatPref: "좌석 선호",
    window: "창가석",
    aisle: "복도석",
    task1Heading: "테스트 1 · 도쿄행 항공권 예매",
    task2Heading: "테스트 2 · 귀국행 항공권 예매",
    testIntroBody:
      "아래 조건에 맞춰 피그마 프로토타입에서 항공권 예매 과제를 진행해 주세요. 과제를 마치면 이 페이지로 돌아와 계속하기를 눌러주세요.",
    goToTest: "테스트 시작하기 (새 창)",
    testDone: "테스트를 완료했습니다 — 계속하기",
    postSurveyTitle: "짧은 설문에 답해주세요",
    postSurveyBody:
      "방금 진행한 과제와 대기 화면에 대한 설문입니다. 아래 버튼을 눌러 설문을 진행한 뒤, 이 페이지로 돌아와 계속하기를 눌러주세요.",
    finishTitle: "참여해 주셔서 감사합니다",
    finishBody:
      "모든 과제와 설문이 완료되었습니다. 창을 닫으셔도 좋습니다. 소중한 시간을 내어 참여해 주셔서 진심으로 감사드립니다.",
  },
  TW: {
    heroTitle: "線上等待畫面使用者體驗研究",
    heroBody:
      "本網站是研究參與導覽頁面，用於說明線上機票預訂過程中等待畫面的使用者體驗研究。實際任務將在 Figma 原型中進行。",
    start: "開始參與",
    estTime: "預估所需時間：約 10–15 分鐘",
    countryTitle: "請選擇您的國家",
    countryBody: "您選擇的國家將決定後續畫面的語言與機票行程。",
    countryKR: "大韓民國",
    countryTW: "台灣",
    eligibilityTitle: "參與資格確認問卷",
    eligibilityBody:
      "參與本研究前，請先完成簡短的資格確認問卷。請點擊下方按鈕前往問卷，完成後返回本頁面並點選繼續。",
    goToSurvey: "前往問卷（開新視窗）",
    surveyDone: "我已完成問卷 — 繼續",
    assigning: "正在分配您的參與條件……",
    yourCode: "參與者代碼",
    codeInstruction: "問卷第一題應已自動填入此代碼，請確認未被清除。",
    copyCode: "複製代碼",
    copied: "已複製",
    origin: "出發地",
    destination: "目的地",
    date: "搭乘日期",
    passengers: "人數",
    passengersUnit: "位",
    timePref: "出發時段",
    morning: "上午",
    afternoon: "下午",
    seatPref: "座位偏好",
    window: "靠窗座位",
    aisle: "走道座位",
    task1Heading: "測試 1 · 預訂前往東京的機票",
    task2Heading: "測試 2 · 預訂回國的機票",
    testIntroBody:
      "請依照以下條件在 Figma 原型中完成機票預訂任務。完成後請返回本頁面並點選繼續。",
    goToTest: "開始測試（開新視窗）",
    testDone: "我已完成測試 — 繼續",
    postSurveyTitle: "請填寫簡短問卷",
    postSurveyBody:
      "以下問卷關於您剛剛完成的任務與等待畫面。請點擊下方按鈕前往問卷，完成後返回本頁面並點選繼續。",
    finishTitle: "感謝您的參與",
    finishBody: "所有任務與問卷皆已完成，您可以關閉此視窗。誠摯感謝您撥冗參與本研究。",
  },
};

export function t(country: CountryCode): Dict {
  return dict[country];
}
