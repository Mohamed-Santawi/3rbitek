const translations = {
  en: {
    home: "Home",
    login: "Login",
    english: "English",
    arabic: "Arabic",
    post: "Post Your Offer",
    freePost: "Free",
    cars:"Cars",
    trucks:"Trucks",
    equipment:"Equipment",
    buses:"Buses",
    spareParts:"Spare Parts",
    hyundai:"Hyundai",
    kia:"KIA",
    bmw:"BMW",
    nissan:"Nissan",
    toyota:"Toyota",
    mercedes:"Mercedes Benz",
    ford:"Ford",
    mitsu:"Mitsubishi",
    chevrolet:"Chevrolet",
    honda:"Honda",
    Peugeot:"Peugeot",
    Volkswagen:"Volkswagen",
    Opel:"Opel",
    Lexus:"Lexus",
    join: "Join Our Family",
    web:"3rbitek.com",
    Promotion: "Get Our Promotion And Become A Member ,Put Your Work Gallery In 3rbitek.com And Increase Your Profit and Clients",
    Gallery: "Member Work Gallery",
    details: "Full Details",
    text: "All Vehicles In One Place | New & Used Cars , Trucks , Buses , Vans , Trailer , Heavy Equipment and  SpareParts , Research & Compare Models , Find Local Dealers , Sell Your Car & More",
    contact: "Contact Us On",
    mail: "info@3rbitek.com",
    follow: "Follow Us On",
    copyright:" Copyright © 3rbitek.com All Rights Reserved"
  },
  ar: {
    home: "الرئيسية",
    login: "الدخول",
    english: "الإنجليزية",
    arabic: "العربية",
    search: "ما الذى تبحث عنه ؟",
    post: "أضف إعلانك",
    freePost: "مجانا",
    cars:"سيارات",
    trucks:"شاحنات",
    equipment: "معدات ثقيلة",
    buses:"باصات",
    spareParts:"قطع غيار",
    hyundai:"هيونداي",
    kia:"كيا",
    bmw:"بي ام دبليو",
    nissan:"نيسسان",
    toyota:"تيوتا",
    mercedes:"مرسيدس بنز",
    ford:"فورد",
    mitsu:"ميتسوبيشي",
    chevrolet:"شيفروليه",
    honda:"هوندا",
    Peugeot:"بيجو",
    Volkswagen:"فولكس فاجن",
    Opel:"اوبل",
    Lexus:"لكزس",
    join: "انضم لعائلتنا",
    web: "3rbitek.com",
    Promotion: "انضم إلينا واحصل علي الخصم , ضع معرض أعمالك عندنا وزد أرباحك وعملائك.",
    Gallery: "معرض صور عملائنا",
    details: "مزيد من المعلومات",
    text: "سوق السيارات وقطع الغيار |  موقع إلكتروني مختص في بيع وشراء وتأجير وطلب السيارات والشاحنات والمقطورات والمعدات الثقيلة و الباصات والفانات وقطع الغيار",
    contact: "للتواصل معنا",
    mail: "info@3rbitek.com",
    follow: "تابعونا علي",
    copyright:"جميع الحقوق محفوظة لموقع عربيتك © 2022"
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
