slider = {
  time: 3000,
  images: [
    "./img/banner-1.jpg",
    "./img/banner-2.jpg",
    "./img/banner-3.jpg",
    "./img/banner-4.jpg",
    "./img/banner-5.jpg",
    "./img/banner-6.jpg",
    "./img/banner-7.jpg",
    "./img/banner-8.jpg",
    "./img/banner-9.jpg",
    "./img/banner-10.jpg",
    "./img/banner-11.jpg"
  ]
};

let i = 0;

function changeImg() {
  document.slider.src = slider.images[i];

  if (i < slider.images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, slider.time);
}

window.addEventListener("load", changeImg);
