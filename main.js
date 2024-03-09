const AdditionButton = document.getElementById("addition-btn");
const BuyButton = document.getElementById("buy-btn");
const DisplayButton = document.getElementById("display-btn");
const shop = document.getElementById("shop");

const number = document.getElementById("counter");

let maincount = 0;
let levelcount = 1;

function countUp() {
  maincount++;
  number.textContent = maincount;
}

AdditionButton.addEventListener("click", countUp, false);

BuyButton.addEventListener(
  "click",
  () => {
    levelcount++;
    BuyButton.textContent = `level${levelcount}`;
    setInterval(countUp, 1000 - levelcount);
  },
  false
);

DisplayButton.addEventListener(
  "click",
  function () {
    if (shop.style.display == "block") {
      shop.style.display = "none";
      shop.classList.remove("shop");
      DisplayButton.classList.remove("X");
      DisplayButton.classList.add("hamburger");
    } else {
      shop.style.display = "block";
      shop.classList.add("shop");
      DisplayButton.classList.add("X");
      DisplayButton.classList.remove("hamburger");
    }
  },
  false
);
