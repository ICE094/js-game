const additionbutton = document.getElementById("addition-btn");
const buybutton = document.getElementById("buy-btn");
const displaybutton = document.getElementById("display-btn");
const shop = document.getElementById("shop");

const number = document.getElementById("counter");

let maincount = 0;
let levelcount = 0;

additionbutton.addEventListener(
  "click",
  function () {
    maincount++;
    number.textContent = maincount;
  },
  false
);

buybutton.addEventListener(
  "click",
  function () {
    levelcount++;
    buybutton.textContent = `level${levelcount}`;
  },
  false
);

displaybutton.addEventListener(
  "click",
  function () {
    if (shop.style.display == "block") {
      shop.style.display = "none";
      displaybutton.classList.remove("X");
      displaybutton.classList.add("hamburger");
    } else {
      shop.style.display = "block";
      displaybutton.classList.add("X");
      displaybutton.classList.remove("hamburger");
    }
  },
  false
);
