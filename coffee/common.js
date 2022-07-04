const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');
const thisYear = document.querySelector('.this-year');

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

thisYear.textContent = new Date().getFullYear();