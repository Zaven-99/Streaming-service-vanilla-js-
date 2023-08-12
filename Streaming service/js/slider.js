let slides = document.querySelectorAll(".img-album"),
    prev = document.querySelector(".arrow-left"),
    next = document.querySelector(".arrow-right"),
    total = document.querySelector(".total"),
    current = document.querySelector(".current"),
    slideWrapper = document.querySelector(".interesting-wrapper"),
    slidesInner = document.querySelector(".interesting-inner"),
    width = window.getComputedStyle(slideWrapper).width;

let index = 1;
let offset = 0;

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${index}/`;
} else {
  total.textContent = slides.length;
  current.textContent = index;
}

slidesInner.style.width = 101 * slides.length + "%";
slidesInner.style.display = "flex";
slidesInner.style.transition = "0.5s all";

slideWrapper.style.overflow = "hidden";

slides.forEach((slide) => {
  slide.style.width = "1800px";
  slide.style.height = "310px";
});

next.addEventListener("click", () => {
  if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.replace(/\D/g, "");
  }
  slidesInner.style.transform = `translateX(-${offset}px)`;

  if (index == slides.length) {
    index = 1;
  } else {
    index++;
  }

  if (slides.length < 10) {
    current.textContent = `0${index}/`;
  } else {
    current.textContent = index;
  }
});

prev.addEventListener("click", () => {
  if (offset == 0) {
    offset = +width.replace(/\D/g, "") * (slides.length - 1);
  } else {
    offset -= +width.replace(/\D/g, "");
  }
  slidesInner.style.transform = `translateX(-${offset}px)`;

  if (index == 1) {
    index = slides.length;
  } else {
    index--;
  }

  if (slides.length < 10) {
    current.textContent = `0${index}/`;
  } else {
    current.textContent = index;
  }
});
