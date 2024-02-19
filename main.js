const additionbutton = document.getElementById("addition-btn");
const buybutton = document.getElementById("buy-btn");
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
