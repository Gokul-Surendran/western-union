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

// To create spin-weel-bg-animation
// const spinWeelBg_body = document.querySelector(".spinWeelBg_body");
const spinWeelBg_body = document.querySelector(".wu-spin-wheel__outer.spinWeelBg_body");
var spinWeelBg_names = "Lorem ipsum, dolor, sit amet consectetur, adipisicing elit, Inventore, esse numquam, tempore facere, odio! Quisquam, tempora accusantium, ut aliquid, Quidem, libero, consectetur, facere voluptatem deserunt, animi voluptates, dolore non ve";

if (spinWeelBg_body) {
  let spinWeelBg_nameArray = spinWeelBg_names.split(',');

  spinWeelBg_nameArray.forEach(item => {
    const ele = createNewElement();

    setTimeout(() => {
      ele.classList.add('spinWeelBg_name--mod');
      ele.style.left = `${randomNumberGenerator(0, 90)}%`;

      // calling function to set position
      setRandomPosition(ele);
    }, 0)

    // To set the position of each name
    function setRandomPosition(ele) {
      ele.style.setProperty('--anime-top-pos1', randomNumberGenerator(0, 20) + '%');
      ele.style.setProperty('--anime-top-pos2', randomNumberGenerator(0, 40) + '%');
      ele.style.setProperty('--anime-top-pos3', randomNumberGenerator(0, 60) + '%');
      ele.style.setProperty('--anime-top-pos4', randomNumberGenerator(0, 80) + '%');
      ele.style.setProperty('--anime-top-pos5', randomNumberGenerator(0, 100) + '%');
    }

    // To create a random number b/w min and max
    function randomNumberGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // To create and add element to the body
    function createNewElement() {
      const ele = document.createElement('div');
      ele.classList.add('spinWeelBg_name');
      ele.textContent = item + "?";
      spinWeelBg_body.appendChild(ele);
      return ele;
    }
  })
}
