// -- menu
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

let burgerClick = () => {
  closeBtn.classList.toggle("close-btn--active");
  menu.classList.toggle("menu--active");
};
closeBtn.addEventListener("click", burgerClick);

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
      item.classList.contains(tabName) ?
        item.classList.add("is-active") :
        item.classList.remove("is-active");
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

// -- scroll to top
const scrollTop = document.querySelector(".scroll-top");
let scrolled;
let timer;

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollTop.classList.remove("scroll-top--hide");
  } else if (window.scrollY < 700) {
    scrollTop.classList.add("scroll-top--hide");
  }
};
scrollTop.onclick = () => {
  scrolled = window.pageYOffset;
  scrollToTop();
};

function scrollToTop() {
  if (scrolled > 0) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled - 100;
    timer = setTimeout(scrollToTop, 20)
  } else {
    clearTimeout(timer);
    window.scrollTo(0, 0)
  }
}

// -- form validation
const form = document.getElementById("form");
const inputName = document.getElementById("inputName");
const inputMail = document.getElementById("inputMail");
const select = document.getElementById("select");
const onDate = document.getElementById("onDate");
const closeDate = document.getElementById("closeDate");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const inputNameValue = inputName.value.trim();
  const inputMailValue = inputMail.value.trim();
  const selectValue = select.value.trim();
  const onDateValue = onDate.value.trim();
  const closeDateValue = closeDate.value.trim();

  if (inputNameValue === "") {
    setErrorFor(inputName, "Wpisz swoje imię");
  } else {
    setSuccessFor(inputName);
  }

  if (inputMailValue === "") {
    setErrorFor(inputMail, "Wpisz poprawny adres email");
  } else if (!isEmail(inputMailValue)) {
    setErrorFor(inputMail, "Wpisz poprawny adres email");
  } else {
    setSuccessFor(inputMail);
  }

  if (selectValue == "") {
    setErrorFor(select, "wybierz samochód");
  } else {
    setSuccessFor(select);
  }

  if (onDateValue == "") {
    setErrorFor(onDate, "Wpisz poprawną datę");
  } else {
    setSuccessFor(onDate);
  }

  if (closeDateValue == "") {
    setErrorFor(closeDate, "Wpisz poprawną datę");
  } else {
    setSuccessFor(closeDate);
    resetForm();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMess = formControl.querySelector("#error");

  errorMess.innerText = message;
  formControl.className = "form error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function resetForm() {
  window.setTimeout(function () {
    form.reset();
    alert("dziękujęmy, juź za niedługo skontaktujemy się mailowo");
  }, 2000);
}