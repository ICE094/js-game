const AdditionButton = document.getElementById("addition-btn");
const BuyButton = document.getElementById("buy-btn");
const DisplayButton = document.getElementById("display-btn");
const shop = document.getElementById("shop");

const number = document.getElementById("counter");

let maincount = 0;
let levelcount = 1;

function countUp() {
  maincount++;
  if (maincount > 10) {
    clearInterval(a);
  }
  number.textContent = maincount;
}

AdditionButton.addEventListener("click", countUp, false);

BuyButton.addEventListener(
  "click",
  () => {
    levelcount++;
    BuyButton.textContent = `level${levelcount}`;
    let a = setInterval(countUp, 1000);
  },
  false
);

DisplayButton.addEventListener(
  "click",
  () => {
    if (shop.classList == "shop shop-active") {
      shop.classList.remove("shop-active");
      DisplayButton.classList.remove("X");
      DisplayButton.classList.add("hamburger");
    } else {
      shop.classList.add("shop-active");
      DisplayButton.classList.add("X");
      DisplayButton.classList.remove("hamburger");
    }
  },
  false
);
