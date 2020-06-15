// menu
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

let burgerClick = () => {
  closeBtn.classList.toggle("close-btn--active");
  menu.classList.toggle("menu--active");
};
closeBtn.addEventListener("click", burgerClick);

// scroll to top
const scrollTop = document.querySelector('.scroll-top');

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollTop.classList.remove('scroll-top--hide')
  } else if (window.scrollY < 700) {
    scrollTop.classList.add('scroll-top--hide')
  }
}
scrollTop.onclick = () => {
  window.scrollTo(0, 0);
}