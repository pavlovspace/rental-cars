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
const closeP = document.querySelector("#closeP");
const popupNone = document.querySelector("#popup-none");
const popBtn = document.querySelector("#popBtn");

popBtn.addEventListener("click", () => {
  popupNone.style.display = "block";
});

closeP.addEventListener("click", () => {
  popupNone.style.display = "none";
});
