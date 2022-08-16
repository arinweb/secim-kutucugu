var dropdown = document.querySelector(".dropdown");
var dropdownControl = document.querySelector(".dropdownControl");
var dropdownIcon = document.querySelector(".dropdown-icon");
var textIN = document.querySelector(".text");

function show(text) {
  textIN.value = text;
  dropdownIcon.classList.toggle("fa-chevron-up");
  dropdown.classList.toggle("dropdown-active");
}

dropdownControl.addEventListener("click", function() {
  dropdownIcon.classList.toggle("fa-chevron-up");
  dropdown.classList.toggle("dropdown-active");
});
