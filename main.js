const translations = {
  en: {
    home: "Home",
    login: "Login",
    english: "English",
    arabic: "Arabic",
    post: "Post Your Offer",
  },
  ar: {
    home: "الرئيسية",
    login: "الدخول",
    english: "الإنجليزية",
    arabic: "العربية",
    search: "ما الذى تبحث عنه ؟",
    post: "أضف إعلانك",
  },
};
const option = document.querySelectorAll("option");
const languageSelector = document.getElementById("select");
const englishBtn = document.getElementById("eng-btn");
const arabicBtn = document.getElementById("arb-btn");
const input = document.getElementById("input-search");
console.log(translations.en);
console.log(translations.ar);
englishBtn.addEventListener("click", (eo) => {
  setLanguage(eo.target.value);
  input.setAttribute("placeholder", "What are you looking for ?");
  localStorage.setItem("search", input.getAttribute("placeholder"));
  localStorage.setItem("lang", eo.target.value);
});
arabicBtn.addEventListener("click", (eo) => {
  setLanguage(eo.target.value);
  input.setAttribute("placeholder", "ما الذى تبحث عنه؟");
  localStorage.setItem("search", input.getAttribute("placeholder"));
  localStorage.setItem("lang", eo.target.value);
});
console.log(localStorage.getItem("search"));
onload = () => {
  setLanguage(localStorage.getItem("lang"));
  input.setAttribute("placeholder", localStorage.getItem("search"));
};
const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-trans]");
  elements.forEach((item) => {
    const translationKey = item.getAttribute("data-trans");
    item.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
