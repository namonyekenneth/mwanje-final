// nav bar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }





const sliderContainer = document.querySelector('.slider-container');
let slideIndex = 0;

function slide() {
    if (slideIndex === 3) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(slide, 3000); // Change slide every 3 seconds



  