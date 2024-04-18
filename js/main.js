var slideIndex = 0;

var slides = [
  {
    offset: 0,
    title: "we are breaking our vow of silence",
    titleClassName: "top-left",
    footerText:
      "In Juanary 2011, after a decade of digital, we opened the doors to our temple. Follow our noble eightfold path to digital enlightenment here.",
    footerTextClassName: "landing",
  },
  {
    offset: -11.13,
    title: "talent is given true skill is earned",
    titleClassName: "left",
    footerText: "Step 1 out of 8 on the path to digital enlightenment.",
    footerTextClassName: "",
  },
  {
    offset: -18.96,
    title: "be flexible to change and sturdy in conviction",
    titleClassName: "left",
    footerText: "Step 2 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -30.7,
    title: "use many skills yet work as one",
    titleClassName: "right",
    footerText: "Step 3 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -42.33,
    title: "to master anything find interest in everything",
    titleClassName: "right",
    footerText: "Step 4 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -54,
    title: "individuals flourish if culture and wisdom are shared",
    titleClassName: "top-right",
    footerText: "Step 5 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -66.2,
    title: "train for perfection but aim for more",
    titleClassName: "left",
    footerText: "Step 6 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -83.31,
    title: "take pride in your work but do not seek praise",
    titleClassName: "left",
    footerText: "Step 7 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -83.31,
    title: "temporary sacrifice brings lasting results",
    titleClassName: "left",
    footerText: "Step 8 out of 8 on the path to digital enlightenment",
    footerTextClassName: "",
  },
  {
    offset: -95.46,
    title: "",
    titleClassName: "top-right",
    footerText: "",
    footerTextClassName: "",
  },
];

var $container = document.getElementsByClassName("container")[0];
var $preload = document.getElementsByClassName("preload")[0];
var $mainTitle = document.getElementById("main-title");
var $footerText = document.getElementById("footer-text");
var $footerButtons = document.getElementsByClassName("footer__button");
var $buttonPrev = document.getElementsByClassName("button-prev")[0];
var $buttonNext = document.getElementsByClassName("button-next")[0];
var $lastSlide = document.getElementsByClassName("last-slide")[0];

function initialize() {
  var $img = new Image();
  $img.id = "scene";
  $img.src = "assets/images/background.jpg";
  $img.onload = function () {
    setTimeout(function () {
      $preload.classList.remove("visible");
    }, 2000);
  };
  $container.prepend($img);
}

function getSlideData(slideIndex) {
  return slides[slideIndex];
}

function goToSlide(index) {
  if (index < 0 || index > slides.length - 1) {
    return;
  }
  slideIndex = index;
  var $scene = document.getElementById("scene");
  var $footerButtonActive = document.getElementsByClassName(
    "footer__button--active"
  )[0];
  var data = getSlideData(slideIndex);

  // move background image
  $scene.style.transform = `translateX(${data.offset}%)`;

  // set title class
  $mainTitle.classList.remove("visible");
  $footerText.classList.remove("visible");
  setTimeout(function () {
    $mainTitle.className = data.titleClassName + " visible";
    $footerText.className = data.footerTextClassName + " visible";
    //set title
    $mainTitle.innerHTML = data.title;
    //set footer text
    $footerText.innerHTML = data.footerText;

    // navigation buttons
    if (index === 0) {
      $buttonPrev.classList.remove("visible");
    } else {
      $buttonPrev.classList.add("visible");
    }
    if (index === slides.length - 1) {
      $buttonNext.classList.remove("visible");
    } else {
      $buttonNext.classList.add("visible");
    }
  }, 1000);

  // navigation buttons
  $footerButtonActive.classList.remove("footer__button--active");
  $footerButtons[index].classList.add("footer__button--active");

  setTimeout(function () {
    if (index === slides.length - 1) {
      $lastSlide.classList.add("visible");
    } else {
      $lastSlide.classList.remove("visible");
    }
  }, 300);
}

function goToNextSlide() {
  goToSlide(slideIndex + 1);
}

function goToPrevSlide() {
  goToSlide(slideIndex - 1);
}
