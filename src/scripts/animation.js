const building = document.getElementById('building');
const text1 = document.querySelector('.text1-anim');
const text01 = document.querySelector('.text01');
const text02 = document.querySelector('.text02');
const text03 = document.querySelector('.text03');
const text04 = document.querySelector('.text04');
const text05 = document.querySelector('.text05');
const text1Opacity = document.querySelectorAll('.text1-opacity');
const promo = document.querySelector('.promo');
const promoText = document.querySelector('.promo-text');
const cloud2 = document.querySelectorAll('.cloud2');
const mission = document.querySelector('.mission');
const section = document.querySelector('.section');
// const height = document.documentElement.clientHeight
let last_scroll = 0;
let time = 0;
function reloadTime() {
    time = 1;
    setTimeout(() => {
        time = 0;
    }, 700);
}
let onScroll = () => {
    const text1Bottom = text1.getBoundingClientRect().bottom;
    const text1Top = text1.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;
    const promoTop = promo.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    if ((scrollY > last_scroll || scrollY == 0) && !time && text1Top <= 0) {
        if (!building.className.includes('closed')) {
            building.classList.add('closed');
            building.classList.remove('active');
            reloadTime();
        }
    }
    else if (scrollY < last_scroll && !time && text1Bottom >= 0) {
        if (!building.className.includes('active') && building.className.includes('closed')) {
            building.classList.add('active');
            building.classList.remove('closed');
            reloadTime();
        }
    }
    if (sectionTop - 300 <= 0) {
        if (!text01.className.includes('active'))
            text01.classList.add('active');
        if (!text02.className.includes('active'))
            text02.classList.add('active');
        if (!text03.className.includes('active'))
            text03.classList.add('active');
        if (!text04.className.includes('active'))
            text04.classList.add('active');
        if (!text05.className.includes('active'))
            text05.classList.add('active');
        if (!mission.className.includes('active'))
            mission.classList.add('active');
        text1Opacity.forEach(e => {
            if (!e.className.includes('active'))
                e.classList.add('active');
        });
        cloud2.forEach(e => {
            if (!e.className.includes('active'))
                e.classList.add('active');
        });
    }
    if (promoTop - 300 <= 0) {
        if (!promoText.className.includes('active'))
            promoText.classList.add('active');
    }
    last_scroll = scrollY;
};
setTimeout(() => {
    document.addEventListener('scroll', onScroll);
}, 1000);
