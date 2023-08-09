let searchText = document.querySelector('.search__text'),
searchBtn = document.querySelector('.search__button'),
searchBlock = document.querySelector('.search__block'),
searchInput = document.querySelector('.search__input'),
body = document.querySelector('.page__body');

searchBtn.addEventListener('click', (e) => {
  e.stopPropagation;
  searchBlock.classList.add('active-block');
  searchBtn.classList.add('active-button');
});

body.addEventListener('click', (e) => {
  if (e.target != searchBtn && e.target != searchText && e.target != searchInput) {
    searchBlock.classList.remove('active-block');
    searchBtn.classList.remove('active-button');
  };
});

let audio = document.querySelector('.siema__audio');
let audioControl = document.querySelector('.siema__audio-control');

document.addEventListener("DOMContentLoaded", () => {
  audio.pause();
});

audioControl.addEventListener('click', function (e) {
  e.preventDefault();
  if (audioControl.classList.contains('active')) {
    console.log('DDD');
    audio.play();
    audioControl.classList.remove('active');
  } else {
    console.log('PPP');
    audio.pause();
    audioControl.classList.add('active');
  }
}, false);
