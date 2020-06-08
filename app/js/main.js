const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

let burgerClick = () => {
  closeBtn.classList.toggle("close-btn--active");
  menu.classList.toggle("menu--active");
};
closeBtn.addEventListener("click", burgerClick);
