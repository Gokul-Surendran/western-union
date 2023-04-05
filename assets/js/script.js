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
const testtt = document.querySelector(".test-block");
var test_text = "Lorem ipsum, dolor, sit amet consectetur, adipisicing elit, Inventore, esse numquam, tempore facere, odio! Quisquam, tempora accusantium, ut aliquid, Quidem, libero, consectetur, facere voluptatem deserunt, animi voluptates, dolore non ve"
if(testtt ){
  let text_array = test_text.split(','); 
  text_array.forEach(item => {

    const ele = createNewElement();

    setTimeout(()=> {
      ele.classList.add('test--mod');
      ele.style.left = `${randomNumberGenerator(0,90)}%`;

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
    function randomNumberGenerator(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // To create and add element to the body
    function createNewElement() {
      const ele = document.createElement('div');
      ele.classList.add('test');
      ele.textContent = item + "?";
      testtt.appendChild(ele);
      return ele;
    }
  })
}
