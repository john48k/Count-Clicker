const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
const countLabel = document.getElementById("countLabel");

let count = 0;

Increase.onclick = function () {
  count++;
  countLabel.textContent = count;
};

Decrease.onclick = function () {
  count--;
  countLabel.textContent = count;
};

Reset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
