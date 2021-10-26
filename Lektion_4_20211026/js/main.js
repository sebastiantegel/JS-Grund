window.onload = function () {
  document.getElementById("userInput").addEventListener("keyup", handleChange);

  doTheListStuff();

  createFirstHTML();

  //createListAndHTML();

  let button = document.createElement("button");
  button.innerHTML = "Skapa lista";
  button.addEventListener("click", createListAndHTML);
  document.body.appendChild(button);
};

function handleChange(e) {
  //   console.log("Du skriver någonting");

  document.getElementById("result").innerHTML = e.target.value;
}

function doTheListStuff() {
  //            0  1  2  3  4  5   6
  let myList = [1, 1, 2, 3, 5, 8, 13];

  myList.push(21);
  myList.pop();
  myList.splice(4, 1);

  for (let i = 0; i < myList.length; i++) {
    console.log(myList[i]);
  }

  let myStrings = ["Hej", "hej", "!"];
  for (let i = 0; i < myStrings.length; i++) {
    console.log(myStrings[i]);
  }
}

function createFirstHTML() {
  let myDiv = document.createElement("div"); // <div></div>

  myDiv.innerHTML = "lorem ipsum"; // <div>lorem ipsum</div>

  myDiv.className = "fancyText"; // <div class="fancyText">lorem ipsum</div>

  myDiv.addEventListener("click", handleClick);

  document.body.appendChild(myDiv);
}

function handleClick() {
  console.log("Det fungerar");
}

function createListAndHTML() {
  let myDays = ["Train", "Eat", "Sleep"];

  let ul = document.createElement("ul");
  ul.className = "fancyList";

  for (let i = 0; i < myDays.length; i++) {
    let li = document.createElement("li"); // <li></li>
    li.innerHTML = myDays[i]; //<li>Train</li>
    ul.appendChild(li); //<ul><li>Train</li></ul>
  }

  document.getElementById("container").appendChild(ul);
}
