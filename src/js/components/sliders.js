const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap')); //get

const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

});

const relatedSlider = new Swiper('.related-projects__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.related-projects__next',
    prevEl: '.related-projects__prev',
  },
});

const workImages = document.querySelector('.work-images-slider');

if (workImages) {
  const workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const workSliderNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

const similarSlider = new Swiper('.similar-projects__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.similar-projects__next',
    prevEl: '.similar-projects__prev',
  },
});

