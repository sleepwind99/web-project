//검색 컨트롤
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 페이지 스크롤
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});


// 순차적으로 나타나는 기능
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// 슬라이드 기능
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true, 
  loop: true 
});
new Swiper('.promotion .swiper', {
  autoplay: { 
    delay: 5000 
  },
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true, 
  pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
  },
  navigation: { 
    prevEl: '.promotion .swiper-button-prev', 
    nextEl: '.promotion .swiper-button-next' 
  }
});
new Swiper('.awards .swiper', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5, 
  navigation: { 
    prevEl: '.awards .swiper-button-prev', 
    nextEl: '.awards .swiper-button-next' 
  }
});


// 프로모션 토글 기능
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});


// 부유 요소 관리
gsap.to('.floating1', 1.5, {
  delay: 1, 
  y: 15, 
  repeat: -1, 
  yoyo: true, 
  ease: Power1.easeInOut 
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


// 스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl, 
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()); 
});


//년도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
