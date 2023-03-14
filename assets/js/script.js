var tiles = document.querySelectorAll(".wu-my-coupons__tile-outer");

tiles.forEach((tile) => {
  const btn_add = tile.querySelector(".wu-my-coupons__arrow-right");
  const btn_remove = tile.querySelector(".wu-my-coupons__arrow-left");
  btn_add.addEventListener("click", (e) => {
    e.preventDefault();
    tile.classList.add("show");
  });
  btn_remove.addEventListener("click", (e) => {
    e.preventDefault();
    tile.classList.remove("show");
  });
});

// spinner
const spinbtn = document.querySelector('.wu-spin-wheel__btn');
const stopbtn = document.querySelector('.wu-spin-wheel__btn--modal');
const spinbody = document.querySelector('.wu-spin-wheel');


spinbtn.addEventListener('click', () => {
  spinbody.classList.add('wu-spin-wheel--spin')
})
stopbtn.addEventListener('click', () => {
  spinbody.classList.add('wu-spin-wheel--stop')
})