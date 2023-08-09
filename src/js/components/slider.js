import Siema from "siema";

const btn0 = document.querySelector(".siema__btn0");
const btn1 = document.querySelector(".siema__btn1");
const btn2 = document.querySelector(".siema__btn2");
const btn3 = document.querySelector(".siema__btn3");
const btns = document.querySelectorAll(".siema__btn");
const prev = document.querySelector(".siema__left-chevron");
const next = document.querySelector(".siema__right-chevron");
const btnPlay = document.querySelector(".siema__btn-play");

function slideIndex() {
  btns.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
  document.querySelector(`.siema__btn${this.currentSlide}`).classList.add('active');
}

const mySiema = new Siema({
  selector: ".siema__wrapper",
  loop: true,
  duration: 1000,
  easing: "ease-out",
  perPage: 1,
  startIndex: 1,
  draggable: true,
  multipleDrag: false,
  threshold: 20,
  onInit: slideIndex,
  onChange: slideIndex,
});

let timer;

btnPlay.addEventListener('click', () => {
  if (btnPlay.classList.contains('is-plaing')) {
    btnPlay.classList.remove('is-plaing');
    if (timer) {clearInterval(timer);}
  } else {
    btnPlay.classList.add('is-plaing');
    timer = setInterval(() => mySiema.next(), 5000);
  }
});



btn0.addEventListener("click", () =>mySiema.goTo(0, () => {
  if (!btnPlay.classList.contains('is-plaing')) {
    btnPlay.classList.add('is-plaing');
    timer = setInterval(() => mySiema.next(), 5000);
  }
})
);
btn1.addEventListener("click", () =>mySiema.goTo(1, () => {
  if (!btnPlay.classList.contains('is-plaing')) {
    btnPlay.classList.add('is-plaing');
    timer = setInterval(() => mySiema.next(), 5000);
  }
})
);
btn2.addEventListener("click",() => mySiema.goTo(2, () => {
  if (!btnPlay.classList.contains('is-plaing')) {
    btnPlay.classList.add('is-plaing');
    timer = setInterval(() => mySiema.next(), 5000);
  }
})
);
btn3.addEventListener("click",() => mySiema.goTo(3, () => {
  if (!btnPlay.classList.contains('is-plaing')) {
    btnPlay.classList.add('is-plaing');
    timer = setInterval(() => mySiema.next(), 5000);
  }
})
);

prev.addEventListener("click", () => mySiema.prev());
next.addEventListener("click", () => mySiema.next());

// let uorBrandTimer = setInterval(() => ourBrandsSiema.next(), 4000);

const ourBrandsSiema = new Siema({
  selector: ".our-brands__slider",
  loop: true,
  duration: 1000,
  easing: "ease-out",
  perPage: 4,
  startIndex: 0,
  draggable: true,
  multipleDrag: false,
  threshold: 20,
  // onInit: slideIndex,
  // onChange: slideIndex,
});

setInterval(() => ourBrandsSiema.next(), 4000);

const prevOurBrands = document.querySelector('.our-brands__prev');
const nextOurBrands = document.querySelector('.our-brands__next');

prevOurBrands.addEventListener('click', () => ourBrandsSiema.prev());
nextOurBrands.addEventListener('click', () => ourBrandsSiema.next());
