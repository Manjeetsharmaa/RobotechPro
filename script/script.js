const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

window.addEventListener("scroll", () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})


// FUNCTION -form
function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/xAeF6bwAqpYumldV/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}


fetch("https://api.apispreadsheets.com/data/xAeF6bwAqpYumldV/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{
			const yourData = data
		}).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})
// function form end

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