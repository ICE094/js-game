const additionbutton = document.getElementById("#addition-btn");
const number = document.getElementById("#counter");

let count = 0;

additionbutton.addEventListener(
  "click",
  function () {
    count++;
    number.textContent = count;
  },
  false
);
