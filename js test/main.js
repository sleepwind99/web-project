const boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function() {
    console.log('click');
    boxEl.classList.add('active');

    var hasActive = boxEl.classList.contains('active');
    console.log(hasActive);

    boxEl.classList.remove('active');
    hasActive = boxEl.classList.contains('active');
    console.log(hasActive);
});