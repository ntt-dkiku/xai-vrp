window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 5000,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  // 全てのスライドを非表示にする
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // 全てのドットのactiveクラスを削除する
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // 選択したスライドを表示し、対応するドットにactiveクラスを追加する
  slides[n-1].style.display = "block";  
  dots[n-1].className += " active";
}

// 初期スライドを表示する
showSlides(1);