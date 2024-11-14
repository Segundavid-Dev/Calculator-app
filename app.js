"use strict";

// getting selectors
const keys = document.querySelectorAll(".key");
// console.log(keys);
const display = document.querySelector(".display");
const displayInput = document.querySelector(".display__input");
const displayOutput = document.querySelector(".display__output");
const button = document.getElementsByTagName("button");
console.log(button);

// creating a string input
let input = "";
for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", function () {
    if (value === "reset") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value === "delete") {
      input = input.slice(0, -1); // remove last element on the string
      displayInput.innerHTML = input;
    } else if (value === "=") {
      let result = eval(input); // eval function to perform calculations
      displayInput.innerHTML = result;
    }
  });
}
