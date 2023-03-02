const KopasURL = "https://www.koreapas.com/";
const RecordURL = "http://record.korea.ac.kr/";
const GitRepoURL = "https://github.com/seohyun0120/quick-sook";
const LibrsvURL = "https://librsv.korea.ac.kr/";
const BlackboardURL = "https://kulms.korea.ac.kr/";
const ScheduleURL = "https://registrar.korea.ac.kr/eduinfo/affairs/schedule.do";
const KoreaHomeURL = "http://www.korea.ac.kr/";
const KoreaPortalURL = "https://portal.korea.ac.kr";
const KoreaJobURL = "http://job.korea.ac.kr/";
const SugangURL = "https://sugang.korea.ac.kr/";
const KuchiveURL = "https://kuchive.korea.ac.kr/";
const KoreaLibraryURL = "https://library.korea.ac.kr/";
const NoticeURL =
  "https://www.korea.ac.kr/mbshome/mbs/university/subview2.jsp?id=university_060202000000";

function openURLInNewTab(url) {
  chrome.tabs.create({ url });
}

document.getElementById("clickKopas").addEventListener(
  "click",
  () => {
    openURLInNewTab(KopasURL);
  },
  false
);
document.getElementById("clickBlackboard").addEventListener(
  "click",
  () => {
    openURLInNewTab(BlackboardURL);
  },
  false
);
document.getElementById("clickKorea").addEventListener(
  "click",
  () => {
    openURLInNewTab(KoreaHomeURL);
  },
  false
);
document.getElementById("clickJob").addEventListener(
  "click",
  () => {
    openURLInNewTab(KoreaJobURL);
  },
  false
);
document.getElementById("clickSchedule").addEventListener(
  "click",
  () => {
    openURLInNewTab(ScheduleURL);
  },
  false
);
document.getElementById("clickRecord").addEventListener(
  "click",
  () => {
    openURLInNewTab(RecordURL);
  },
  false
);
document.getElementById("clickPortal").addEventListener(
  "click",
  () => {
    openURLInNewTab(KoreaPortalURL);
  },
  false
);
document.getElementById("clickLibrsv").addEventListener(
  "click",
  () => {
    openURLInNewTab(LibrsvURL);
  },
  false
);
document.getElementById("clickSugang").addEventListener(
  "click",
  () => {
    openURLInNewTab(SugangURL);
  },
  false
);
document.getElementById("clickKuchive").addEventListener(
  "click",
  () => {
    openURLInNewTab(KuchiveURL);
  },
  false
);
document.getElementById("clickLibrary").addEventListener(
  "click",
  () => {
    openURLInNewTab(KoreaLibraryURL);
  },
  false
);
document.getElementById("clickNotice").addEventListener(
  "click",
  () => {
    openURLInNewTab(NoticeURL);
  },
  false
);

document.getElementById("selectDept").addEventListener("change", function () {
  const loc = this.value;
  openURLInNewTab(loc);
});
