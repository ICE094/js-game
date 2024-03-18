const additionButton = $("#addition-btn");
const header = $(".header");
const shop = $("#shop");
const displayButton = $("#display-btn");
const buyButton = $("#buy-btn");
const levelUpCost = $("#levelup-cost");
const buyButton2 = $("#buy-btn2");
const levelUpCost2 = $("#levelup-cost2");
const shopButton2 = $(".shop-btn2");

const number = $("#counter");

let mainCount = 0;
let intervalID = 0;
let levelCount = 1;
let levelCount2 = 1;
let levelCostCount = 10;
let levelCostCount2 = 1000;

function countUp() {
  mainCount++;
  number.text(mainCount);
  if (
    mainCount >= levelCostCount2 / 2 &&
    shopButton2.css("display") == "none"
  ) {
    shopButton2.css("display", "block");
  }
}

additionButton.on("click", countUp);

buyButton.on("click", () => {
  if (mainCount >= levelCostCount) {
    mainCount -= levelCostCount;
    levelCount++;
    levelCostCount = Math.round(levelCostCount * 1.3);
    buyButton.text(`Level${levelCount}`);
    levelUpCost.text(`Level up cost ${levelCostCount}`);
    intervalID = setInterval(countUp, 1000);
  }
});

buyButton2.on("click", () => {
  if (mainCount >= levelCostCount2) {
    mainCount -= levelCostCount2;
    levelCount2++;
    levelCostCount2 = Math.round(levelCostCount2 * 1.42);
    buyButton2.text(`Level${levelCount2}`);
    levelUpCost2.text(`Level up cost ${levelCostCount2}`);
    for (let i = 0; i < 10; i++) {
      intervalID = setInterval(countUp, 1000);
    }
  }
});

displayButton.on("click", () => {
  if (shop.hasClass("shop-active")) {
    shop.removeClass("shop-active");
    displayButton.removeClass("close");
    displayButton.addClass("hamburger");
    header.css("width", 0);
  } else {
    shop.addClass("shop-active");
    displayButton.addClass("close");
    displayButton.removeClass("hamburger");
    header.css("width", 300);
  }
});
