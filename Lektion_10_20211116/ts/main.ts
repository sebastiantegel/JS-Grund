window.onload = function () {
  document.getElementById("save").addEventListener("click", handleClick);

  let firstname: string = "Sebastian";

  let x: number = 17;
  let i: number = 10;

  let product: number = x * i;

  console.log(firstname);

  let sum = addition(10, 17);
  console.log(sum);
};

function addition(x: number, y: number): number {
  return x + y;
}

function handleClick() {
  let myInput: HTMLInputElement = document.getElementById(
    "name"
  ) as HTMLInputElement;
  // let myInput = document.getElementById("name");

  let userText: string = myInput.value;

  let span: HTMLSpanElement = document.createElement("span");
  span.innerHTML = userText;
  document.body.appendChild(span);
}
