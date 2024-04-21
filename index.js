let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
const increment = () => {
  count += 1;
  countEl.innerHTML = count;
};
const save = () => {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countStr.textContent = 0;
  count = 0;
};
