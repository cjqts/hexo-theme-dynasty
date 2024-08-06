//首页顶部推荐文章轮播图
var ark_swiper = new Swiper("#ark-swiper-container", {
  direction: "horizontal", //横向切换
  loop: true,
  grabCursor : true,//鼠标悬停时显示抓手
  updateOnWindowResize: true,
  slidesPerView: 1,
  effect: "cube",
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: true,
  delay: 2000
});