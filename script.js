// uruchomienie menu z ikony laptopa
$(document).ready(function () {
    $('header .fa-chevron-down').on('click', function () {
        $('body,html').animate({
            scrollTop: $('h1.tech').offset().top
        }, 500);
    });
});
// przewijanie sekcji technologie z przycisku
$('button.pf').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.tech').offset().top
    }, 500);
});
// sekcja technologie z menu
$('div.tec').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.tech').offset().top
    }, 500);
});
// sekcja projekty z menu
$('div.pro').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.projects').offset().top
    }, 600);
});

// sekcja o mnie z menu
$('div.about').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.about').offset().top
    }, 600);
});

// sekcja projekty ze strzałki
$('section.second .fa-chevron-down').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.projects').offset().top
    }, 600);
});

// sekcja o mnie ze strzałki
$('section.projects .fa-chevron-down').on('click', function () {
    $('body,html').animate({
        scrollTop: $('h1.about').offset().top
    }, 600);
});





// animuję menu, pobieram elementy
// pobieram ikonkę laptop i mojego nava
const laptop = document.querySelector('.fa-laptop');
const arrow = document.querySelector('.fa-chevron-down')
const nav = document.querySelector('section.menu');
const textH1 = document.querySelector('h1.tech');

// ustawiam nasłuchiwanie
// uruchamiam wysuwanie menu z boku okna przeglądarki
laptop.addEventListener('click', function () {
    nav.classList.toggle('active');

})

// sekcja o mnie - efekt pisania

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpn = document.querySelector('.cursor');


const textArray = ['Wife', 'Mother', 'Future front-end developer'];
const typingDelay = 50;
const erasingDeley = 50;
// erase - wymazać, wycierać
const newTextDelay = 1000;
// Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay)
        // charAt - metoda zwraca znak na danej pozycji w stringu
    } else {
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDeley)
        // Metoda substring zwraca fragment stringa, na rzecz którego ją wywołujemy. Fragment ten zaczyna się od indeksu przesłanego jako pierwszy argument, a kończy na indeksie przesłanym jako drugi argument. Zwracany fragment nie zawiera znaku o indeksie wskazywanym jako drugi argument
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) setTimeout(type, newTextDelay * 3)
})

// wskakujące elementy na scroll w sekcji o mnie

// pobranie elementu

$(document).on('scroll', function () {

    // wysokość okna przeglądarki
    const windowHeight = $(window).height();
    // console.log(`wysokość okna przeglądarki ${windowHeight}`);


    // wysokość scrolla
    const scrollHeight = $(this).scrollTop();
    console.log(` wysokość scrolla ${scrollHeight}`);
    const $one = $('p.one');
    // wysokość elementu
    const oneHeight = $one.outerHeight();
    // wysokość od góry
    const oneFromTop = $one.offset().top;


    const $second = $('p.second');
    const secondHeight = $second.outerHeight();
    // wysokość od góry
    const secondFromTop = $second.offset().top;
    // console.log(secondFromTop);

    const $third = $('p.third');
    const thirdHeight = $third.outerHeight();
    const thirdFromTop = $third.offset().top;

    const $fourth = $('p.fourth');
    const fourthHeight = $fourth.outerHeight();
    const fourthFromTop = $fourth.offset().top;

    const $liOne = $('ul li.web');
    const $liSecond = $('ul li.adv');
    const $liThird = $('ul li.pro');

    const liOneHeight = $liOne.innerHeight();
    const liSecondHeight = $liSecond.innerHeight();
    const liThirdHeight = $liThird.innerHeight();
    const liOneFromTop = $liOne.offset().top;
    const liSecondFromTop = $liSecond.offset().top;
    const liThirdFromTop = $liThird.offset().top;

    if (scrollHeight > oneFromTop + oneHeight / 2 - windowHeight) {
        $one.addClass('active');
    }
    if (scrollHeight > secondFromTop + secondHeight / 2 - windowHeight) {
        $second.addClass('active');
    }
    if (scrollHeight > thirdFromTop + thirdHeight / 2 - windowHeight) {
        $third.addClass('active');
    }
    if (scrollHeight > fourthFromTop + fourthHeight / 2 - windowHeight) {
        $fourth.addClass('active');
    }
    if (scrollHeight > liOneFromTop + liOneHeight / 2 - windowHeight) {
        $liOne.addClass('active');
    }
    if (scrollHeight > liSecondFromTop + liSecondHeight / 2 - windowHeight) {
        $liSecond.addClass('active');
    }
    if (scrollHeight > liThirdFromTop + liThirdHeight / 2 - windowHeight) {
        $liThird.addClass('active');
    }


    // if (scrollHeight > liOneFromTop + liSecondHeight - windowHeight) {
    //     $liSecond.addClass('active');
    // }
    // if (scrollHeight > liSecondFromTop + liThirdHeight - windowHeight + 100) {
    //     $liThird.addClass('active');
    // }

    // czyszczenie
    // if (scrollHeight < 100) {
    //     $(' li.pro').removeClass('active');
    // }
});
