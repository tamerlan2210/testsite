/* eslint-disable no-undef */
/* eslint-disable func-names */
$(document).ready(function () {
  // sliders
  // section project
  $(".projects-slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  // plan
  $(".plan-slider").slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // accordion
  // section faq
  $(".faq-accordion__text")
    .hide()
    .prev()
    // eslint-disable-next-line func-names
    .on("click", function () {
      if ($(this).is(".-oops")) {
        $(this).animate(
          {
            left: "500px",
            transform: "rotate(900deg)",
          },
          3000
        );
      } else {
        $(".faq-accordion__text")
          .not(this)
          .slideUp()
          .prev()
          .removeClass("active");
        $(this).next().not(":visible").slideDown();
        $(this).toggleClass("active");
      }
    });
});

// mobile menu

const headerMenuBurger = document.querySelector(".header-menu-burger");
const headerWrapper = document.querySelector(".header-wrapper");
const headerMobileMenu = document.querySelector(".header-mobile-menu");
const workTime = document.querySelector(".work-time");
const callRequest = document.querySelector(".call-request");
const html = document.querySelector("html");
const CallRequestButton = document.querySelector(".call-request__button");

// перенос мобильного меню в новый контейнер под шапку при изменении ширины экрана

function toogleMobileMenu() {
  if (window.innerWidth <= 992) {
    headerMobileMenu.append(workTime);
    headerMobileMenu.append(callRequest);
  } else {
    headerWrapper.append(workTime);
    headerWrapper.append(callRequest);
  }
}

toogleMobileMenu();
window.addEventListener("resize", toogleMobileMenu);

headerMenuBurger.addEventListener("click", function () {
  headerMobileMenu.classList.toggle("active");
  html.classList.toggle("scrollLocked");
  headerMenuBurger.classList.toggle("active");
});

CallRequestButton.addEventListener("click", function () {
  if (headerMobileMenu.classList.contains("active")) {
    headerMobileMenu.classList.remove("active");
    html.classList.remove("scrollLocked");
    headerMenuBurger.classList.remove("active");
  }
});
