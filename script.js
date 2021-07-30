// animuję menu, pobieram elementy
// pobieram ikonkę laptop i mojego nava
const laptop = document.querySelector('.fa-laptop');
const arrow = document.querySelector('.fa-chevron-down')
const nav = document.querySelector('section.menu');
const textH1 = document.querySelector('h1.tech');

// ustawiam nasłuchiwanie
laptop.addEventListener('click', function () {
    nav.classList.toggle('active');

})


let scrollPosition = 0;
let pageScroll = false;

const arrowScroll = function (e) {

    scrollPosition = window.scrollY;
    if (!pageScroll) {
        scrollPosition = 413;
        pageScroll = true;

    }

}
arrow.addEventListener('click', arrowScroll)