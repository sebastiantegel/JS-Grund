window.onload = function () {
  start();
};

function start() {
  let saveButton = document.getElementById("save");
  saveButton.addEventListener("click", handleClick);
}

function handleClick() {
  //   console.log("WOHOOOO");
  let pnrValue = document.getElementById("pnr");
  console.log(pnrValue.value);

  let sum = 0;
  for (let i = 0; i < pnrValue.value.length; i++) {
    let currentValue = parseInt(pnrValue.value[i]);
    if (i % 2 === 0) {
      let p = currentValue * 2;
      if (p > 9) {
        sum += 1 + (p % 10);
      } else {
        sum += p;
      }
    } else {
      sum += currentValue;
    }
  }

  console.log("Sum:", sum);

  let controlNumber = 10 - (sum % 10);
  if (controlNumber === 10) {
    controlNumber = 0;
  }

  document.getElementById("result").innerHTML = pnrValue.value + controlNumber;
}

// let pnr = document.getElementById("pnr");
// pnr.addEventListener("change", handleChange);
// function handleChange(e) {
//   console.log(e.target.value);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
