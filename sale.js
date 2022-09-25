const saleBody = document.getElementById("sale-body"),
  inputSearch = document.getElementById("sale-search-id");

console.log(inputSearch);

englishBtn.addEventListener("click", (eo) => {
  inputSearch.setAttribute("placeholder", "Search");
  localStorage.setItem("inputSearch", input.getAttribute("placeholder"));
});

arabicBtn.addEventListener("click", (eo) => {
  inputSearch.setAttribute("placeholder", "بحث");
  localStorage.setItem("inputSearch", input.getAttribute("placeholder"));
});
// Start Body
saleBody.onload = function () {
  setLanguage(localStorage.getItem("lang"));
  input.setAttribute("placeholder", localStorage.getItem("search"));
    if (localStorage.getItem("lang") === "en") {
      inputSearch.setAttribute("placeholder", "Search");
    } else if (localStorage.getItem("lang") === "ar") {
      inputSearch.setAttribute("placeholder", "بحث");
    }
};
// End Body
