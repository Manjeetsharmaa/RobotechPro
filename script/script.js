

document.getElementById("iso-btn").onclick = function () {
  let showImage = document.querySelector(".show-hide");
  if (showImage.classList.toggle('active')) {
    console.log(`it's working`)
  } else {
    showImage.classList.remove('remove');
  }
}



















const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 3000,
    disableOnInteraction: 'false'
  },
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});