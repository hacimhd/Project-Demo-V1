const btn_watchlist = document.getElementById("btn_watchlist")
const btn_element = document.querySelector(".btn_elements")
if (btn_watchlist) {
  btn_watchlist.addEventListener("click", () => {
    btn_element.classList.toggle("el_active")
  })
}
// sign In btn
const signin_open = document.getElementById("signin_btn")
const signin_close = document.getElementById("signin_close")
const sign_element = document.querySelector("#signin")
if (signin_open) {
  signin_open.addEventListener("click", () => {
    sign_element.style.top = "0"
  })
}
if (signin_close) {
  signin_close.addEventListener("click", () => {
    sign_element.style.top = "-200%"
  })
}
// BurgerMenu
const burgermenu = document.getElementById("burgermenu")
const mobile_element = document.querySelector(".mobile_items")
if (burgermenu) {
  burgermenu.addEventListener("click", () => {
    mobile_element.classList.toggle("burger")
  })
}


// slider js
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    340: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 25,
    },
  },
});
//   slider second
var swiper = new Swiper(".mySwiper_second", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    340: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 25,
    },
  },
});
