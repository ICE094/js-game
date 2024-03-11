const AdditionButton = $("#addition-btn");
const BuyButton = $("#buy-btn");
const DisplayButton = $("#display-btn");
const shop = $("#shop");

const number = $("#counter");

let maincount = 0;
let levelcount = 1;
let intervalID = 0;

function countUp() {
  maincount++;
  number.textContent = maincount;
}

$("#AdditionButton").on("click", countUp, false);

$("#BuyButton").on(
  "click",
  () => {
    levelcount++;
    BuyButton.textContent = `level${levelcount}`;
    intervalID = setInterval(countUp, 1000);
  },
  false
);

$("#DisplayButton").on(
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
