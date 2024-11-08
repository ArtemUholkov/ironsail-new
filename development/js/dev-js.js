document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.revenue_menu');
  const menuOffset = menu.getBoundingClientRect().top + window.scrollY;

  // Adjust this offset value to make it sticky earlier
  const earlyOffset = 100; // You can adjust this value as needed

  window.addEventListener('scroll', function () {
    // Check if the scroll position plus half the viewport height minus the offset reaches the menu
    const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;

    if (triggerPoint >= menuOffset) {
      menu.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
    }
  });
});

////////// SETVICES SECTION ////////////
//SCROLL SWIPER + BUTTON

let isEnd = false;

document.querySelector('.dm-serv-scroll').addEventListener('click', () => {
  if (isEnd) {
    swiper3.slidePrev();
  } else {
    swiper3.slideNext();
  }

  isEnd = swiper3.isEnd ? true : swiper3.isBeginning ? false : isEnd;
});

//////// INDUSTRIES SECTION ////////////
//SCROLL SWIPER + BUTTON


let isAtEnd = false;

document.querySelector('.dm-ind-scroll').addEventListener('click', () => {
  if (isAtEnd) {
    swiper2.slidePrev();
  } else {
    swiper2.slideNext();
  }

  isAtEnd = swiper2.isEnd ? true : swiper2.isBeginning ? false : isAtEnd;
});
