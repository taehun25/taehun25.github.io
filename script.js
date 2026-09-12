const translations = {
  en: {
    navEducation: "Education",
    navExperience: "Experience",
    navPublications: "Publications",
    navSkills: "Skills",
    navHonors: "Honors",

    eyebrow: "Robotics · Network Middleware · Embedded Systems",
    heroDescription:
      "M.S. student at DGIST CSI Lab focusing on ROS 2 communication, DDS/Zenoh middleware, and reliable wireless robotic systems.",

    sectionEducationLabel: "Academic Background",
    educationTitle: "Education",

    dgistName:
      "Daegu Gyeongbuk Institute of Science and Technology (DGIST)",
    dgistDegree:
      "M.S. in Electrical Engineering and Computer Science",
    dgistLab:
      "Cyber-Physical System Integration Lab (CSI Lab)",

    pknuName: "Pukyong National University",
    pknuDegree:
      "B.S. in Control & Instrumentation Engineering",

    gpaLabel: "GPA",
    majorGpaLabel: "Major GPA",
    expected: "(Expected)",

    sectionExperienceLabel: "Research Career",
    experienceTitle: "Experience",
    researchArea:
      "Robotics Communication & Network Middleware",
    summerIntern: "Summer Intern",
    msCourse: "M.S. Course",

    sectionPublicationsLabel: "Research Output",
    publicationsTitle: "Publications",
    openPaper: "Open paper ↗",

    sectionSkillsLabel: "Engineering Tools",
    skillsTitle: "Technical Stack",

    sectionHonorsLabel: "Awards",
    honorsTitle: "Honors",

    awardOne:
      "On-campus Metaverse Competition",
    awardTwo:
      "2024 Spring LINC 3.0 Capstone Design Competition",
    awardOrg:
      "Pukyong National University",

    footerText:
      "Hosted with GitHub Pages."
  },

  ko: {
    navEducation: "학력",
    navExperience: "경력",
    navPublications: "논문",
    navSkills: "기술",
    navHonors: "수상",

    eyebrow:
      "로보틱스 · 네트워크 미들웨어 · 임베디드 시스템",
    heroDescription:
      "DGIST CSI Lab 석사과정으로 ROS 2 통신, DDS/Zenoh 미들웨어, 신뢰성 높은 무선 로봇 시스템을 연구하고 있습니다.",

    sectionEducationLabel: "학력사항",
    educationTitle: "학력",

    dgistName:
      "대구경북과학기술원 (DGIST)",
    dgistDegree:
      "전기전자컴퓨터공학 석사과정",
    dgistLab:
      "Cyber-Physical System Integration Lab (CSI Lab)",

    pknuName:
      "국립부경대학교",
    pknuDegree:
      "제어계측공학 학사",

    gpaLabel: "학점",
    majorGpaLabel: "전공 학점",
    expected: "(졸업예정)",

    sectionExperienceLabel: "연구 경력",
    experienceTitle: "경력",
    researchArea:
      "로봇 통신 및 네트워크 미들웨어",
    summerIntern: "하계 인턴",
    msCourse: "석사과정",

    sectionPublicationsLabel: "연구 실적",
    publicationsTitle: "논문 실적",
    openPaper: "논문 보기 ↗",

    sectionSkillsLabel: "기술 역량",
    skillsTitle: "Technical Stack",

    sectionHonorsLabel: "수상 내역",
    honorsTitle: "Honors",

    awardOne:
      "교내 메타버스 경진대회",
    awardTwo:
      "2024년도 1학기 LINC 3.0 캡스톤디자인 경진대회",
    awardOrg:
      "국립부경대학교",

    footerText:
      "GitHub Pages로 제작되었습니다."
  }
};

let currentLanguage = "en";

const translatableElements =
  document.querySelectorAll("[data-i18n]");

const langToggle =
  document.getElementById("langToggle");

function setLanguage(language) {
  currentLanguage = language;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;

    if (
      translations[language] &&
      translations[language][key] !== undefined
    ) {
      element.textContent =
        translations[language][key];
    }
  });

  document.documentElement.lang =
    language === "ko" ? "ko" : "en";

  langToggle.textContent =
    language === "en" ? "한국어" : "English";

  document.title =
    language === "en"
      ? "Taehun Kim | CV"
      : "김태훈 | CV";

  localStorage.setItem(
    "cv-language",
    language
  );
}

langToggle.addEventListener("click", () => {
  const nextLanguage =
    currentLanguage === "en" ? "ko" : "en";

  setLanguage(nextLanguage);
});

const savedLanguage =
  localStorage.getItem("cv-language");

if (
  savedLanguage === "ko" ||
  savedLanguage === "en"
) {
  setLanguage(savedLanguage);
} else {
  setLanguage("en");
}

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}
