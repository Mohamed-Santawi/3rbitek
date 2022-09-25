const arrowLeft = document.getElementById("arrowLeft"),
  arrowRight = document.getElementById("arrowRight"),
  offer = document.getElementById("offer-id"),
  body = document.getElementById("offer-body"),
  img1 = document.getElementById("img-ad-1"),
  img2 = document.getElementById("img-ad-2"),
  img3 = document.getElementById("img-ad-3"),
  img4 = document.getElementById("img-ad-4"),
  img5 = document.getElementById("img-ad-5"),
  adsSub = document.getElementById("ads-sub-id"),
  adsSubSub = document.getElementById("ads-sub-sub-id");

// Start Offer Page
arabicBtn.addEventListener("click", (eo) => {
  arrowLeft.style.opacity = "0";
  arrowRight.style.opacity = "1";
});
englishBtn.addEventListener("click", (eo) => {
  arrowLeft.style.opacity = "1";
  arrowRight.style.opacity = "0";
});
body.onload = function () {
  setLanguage(localStorage.getItem("lang"));
  input.setAttribute("placeholder", localStorage.getItem("search"));
  if (localStorage.getItem("lang") === "en") {
    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "0";
  } else if (localStorage.getItem("lang") === "ar") {
    arrowLeft.style.opacity = "0";
    arrowRight.style.opacity = "1";
  }
  window.scrollTo(0, 240);
};
// Start advertise type
img1.addEventListener("click", (eo) => {
  adsSub.style.display = "none";
  adsSubSub.style.display = "block";
});
img2.addEventListener("click", (eo) => {
  adsSub.style.display = "none";
  adsSubSub.style.display = "block";
});
img3.addEventListener("click", (eo) => {
  adsSub.style.display = "none";
  adsSubSub.style.display = "block";
});
img4.addEventListener("click", (eo) => {
  adsSub.style.display = "none";
  adsSubSub.style.display = "block";
});
img5.addEventListener("click", (eo) => {
  adsSub.style.display = "none";
  adsSubSub.style.display = "block";
});
arrowRight.addEventListener("click", (eo) => {
  adsSub.style.display = "block";
  adsSubSub.style.display = "none";
});
arrowLeft.addEventListener("click", (eo) => {
  adsSub.style.display = "block";
  adsSubSub.style.display = "none";
});
// End advertise type
// End Offer Page
