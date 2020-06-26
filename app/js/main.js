// -- menu
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

let burgerClick = () => {
  closeBtn.classList.toggle("close-btn--active");
  menu.classList.toggle("menu--active");
};
closeBtn.addEventListener("click", burgerClick);

// -- scroll to top
const scrollTop = document.querySelector(".scroll-top");

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollTop.classList.remove("scroll-top--hide");
  } else if (window.scrollY < 700) {
    scrollTop.classList.add("scroll-top--hide");
  }
};
scrollTop.onclick = () => {
  window.scrollTo(0, 0);
};

// -- tabs
let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
tab();

// -- popup
const closePopup = document.querySelectorAll(".close");
const popupNone = document.querySelectorAll(".popup-none");
const openPopup = document.querySelectorAll(".open-popup");

//open popup
openPopup.forEach(function (item) {
  item.addEventListener("click", () => {
    let popupName = item.getAttribute("data-popup");
    document.getElementById(popupName).style.display = "block";
  });
});

//close popup
closePopup.forEach(function (item) {
  item.addEventListener("click", () => {
    let popup = item.closest(".popup-none");
    popup.style.display = "none";
  });
});

// -- preloader
window.onload = function () {
  let preloader = document.querySelector("#preloader");
  preloader.style.display = "none";
};

// -- form validation
const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputMail = document.querySelector("#inputMail");

const helperText = {
  loading: "Ładowanie...",
  succes: "dziękujęmy, juź za niedługo skontaktujemy się mailowo",
  failure: "Coś poszło nie tak...",
};

form.forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    item.appendChild(statusMessage);
  });
});
