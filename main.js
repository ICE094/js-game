const AdditionButton = $("#addition-btn");
const BuyButton = $("#buy-btn");
const DisplayButton = $("#display-btn");
const shop = $("#shop");
const header = $(".header");
const MainButton = $(".main-btn");

const number = $("#counter");

let maincount = 0;
let levelcount = 1;
let intervalID = 0;

function countUp() {
  maincount++;
  number.text(maincount);
}

AdditionButton.on("click", countUp);

BuyButton.on("click", () => {
  levelcount++;
  BuyButton.text(`level${levelcount}`);
  intervalID = setInterval(countUp, 1000);
});

DisplayButton.on("click", () => {
  if (shop.hasClass("shop-active")) {
    shop.removeClass("shop-active");
    DisplayButton.removeClass("X");
    DisplayButton.addClass("hamburger");
    console.log(header.innerWidth());
    while (header.width < 300) {
      MainButton.css("margin-left", header.innerWidth());
    }
  } else {
    shop.addClass("shop-active");
    DisplayButton.addClass("X");
    DisplayButton.removeClass("hamburger");
    while (header.width > 0) {
      MainButton.css("margin-left", header.innerwidth());
    }
  }
});
