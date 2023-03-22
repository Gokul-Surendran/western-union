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
// const spinbtn = document.querySelector('.wu-spin-wheel__btn');
// const stopbtn = document.querySelector('.wu-spin-wheel__btn--modal');
// const spinbody = document.querySelector('.wu-spin-wheel');
// const finishbtn = document.querySelector('.modal-footer .wu-spin-wheel__btn');
// const spinvideo = document.querySelector('.wu-spin-wheel__spinner video');
// const spinwheel = document.querySelector('.wu-spin-wheel__spinner');
// const value = Math.ceil(Math.random() * 36000);


// spinbtn.addEventListener('click', () => {
//   spinbody.classList.add('wu-spin-wheel--spin');
//   window.setTimeout(function () {
//     window.location.href = "../pages/spin-wheel-3.html";
//   }, 20000);

// })
// if (spinvideo.paused == true) {
//   spinvideo.play();
// }
// else {
//   spinvideo.pause();
// }

// spinwheel.style.transform = "rotate(" + value + "deg)";
// spinwheel.style.transition = "duration(" + value + "s)";
// value += Math.ceil(Math.random() * 36000);
// stopbtn.addEventListener('click', () => {
//   spinbody.classList.add('wu-spin-wheel--stop');
// })
// finishbtn.addEventListener('click', () => {
//   spinbody.classList.remove('wu-spin-wheel--spin');
//   spinbody.classList.remove('wu-spin-wheel--stop');
// })

//