const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const spyEls = document.querySelectorAll('section.scroll-spy');
const thisYear = document.querySelector('.this-year');
const toTopEl = document.querySelector('#to-top');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', 'search');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

window.addEventListener('scroll', function(){
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display:'none'
        });
        gsap.to(toTopEl, .6, {
            opacity: 1,
            x: 0
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
        gsap.to(toTopEl, .6, {
            opacity: 0,
            x: 100
        });
    }
});

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .5,
        opacity: 1
    });
});

new Swiper('.notice .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper', {
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation:{
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});

promotionToggleBtn.addEventListener('click', function(){
    if(promotionToggleBtn.classList.contains('hide')){
        promotionToggleBtn.classList.remove('hide');
    }else{
        promotionToggleBtn.classList.add('hide');
    }
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }else{
        promotionEl.classList.add('hide');
    }
});

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

spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .7
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
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

thisYear.textContent = new Date().getFullYear();

toTopEl.addEventListener('click', function(){
    gsap.to(window, 0.6, {
        scrollTo: 0
    });
});