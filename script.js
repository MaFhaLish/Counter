let count = 0;
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let value = document.getElementById("value");

// Decrease Section

decrease.onclick = function () {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  }
};

// Increase Section

increase.onclick = function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  }
};

// Reset Section
reset.onclick = function () {
  count = 0;
  value.textContent = count;
  value.style.color = "#444";
};
