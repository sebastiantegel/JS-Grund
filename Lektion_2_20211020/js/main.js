function start() {
  let input = prompt();
  let myDiv = document.getElementById("lorem");

  console.log(myDiv);
  console.log(myDiv.id);
  console.log(myDiv.innerHTML);

  myDiv.innerHTML += " - Lorem ipsum";
  myDiv.className = "blue";

  let pTag = document.getElementById("myText");
  console.log(pTag);
  console.log(pTag.innerHTML);

  pTag.innerHTML = "dolor sit amet";

  let x = 10;
  if (x > 10) {
    console.log("X är större än 10");
  } else {
    console.log("X är mindre än eller lika med 10");
  }

  if (myDiv.className === "red") {
    myDiv.className += " green";
  }
}
