//Hero slider
const slides = ['01', '02']
const heroSlider = new Swiper(".hero-slider", {
    loop: true,
    lazy: {
        loadPrevNext: true,
    },
    spaceBetween: 100,
    speed: 400,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
            clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (slides[index++]) + '</span>';
        }
    },
});

//Burger menu
burgerBtn.addEventListener("click", (ev) => {
    burgerMenu.classList.toggle('open')
    burgerBtn.classList.toggle('open')
});
window.addEventListener("load", (ev) => {
    burgerMenu.classList.add("transition");
});

//Animate on scroll
AOS.init({
    disable: function() {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      }
});

//Copyright year
copyrightYear.textContent = new Date().getFullYear();