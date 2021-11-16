window.onload = function () {
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
