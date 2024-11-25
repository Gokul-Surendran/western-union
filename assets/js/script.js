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
const spinWeelBg_body = document.querySelector(".wu-spin-wheel__outer.spinWeelBg_body");
var spinWeelBg_names = "Lorem ipsum, dolor, sit amet consectetur, adipisicing elit, Inventore, esse numquam, tempore facere, odio! Quisquam, tempora accusantium, ut aliquid, Quidem, libero, consectetur, facere voluptatem deserunt, animi voluptates, dolore non ve";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener('load', () => {
  if (spinWeelBg_body) {
    let spinWeelBg_nameArray = getParameterByName('names')?.split(',');

    spinWeelBg_nameArray?.forEach(item => {
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

})


// wu-loyaltyprogram page script
// function for pop up and fading
document.addEventListener('DOMContentLoaded', function () {
  const sectionOne = document.querySelectorAll('.wu-loyaltyprgrm__containerinner')[0];
  const sectionTwo = document.querySelectorAll('.wu-loyaltyprgrm__containerinner')[1];
  
  
  function toggleFade(fadedSection, show) {
    if (show) {
      fadedSection.classList.add('faded');  
    } else {
      fadedSection.classList.remove('faded');  
    }
  }

  
  const modal1 = document.getElementById('wu-lpmodal1');
  const modal2 = document.getElementById('wu-lpmodal2');

  
  modal1.addEventListener('show.bs.modal', function () {
    toggleFade(sectionTwo, true);  
  });
  modal1.addEventListener('hidden.bs.modal', function () {
    toggleFade(sectionTwo, false);  
  });

  
  modal2.addEventListener('show.bs.modal', function () {
    toggleFade(sectionOne, true);  
  });
  modal2.addEventListener('hidden.bs.modal', function () {
    toggleFade(sectionOne, false);  
  });
});


