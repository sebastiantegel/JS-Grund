class Person {
  constructor(firstname, age, isMarried) {
    this.name = firstname;
    this.age = age;
    this.isMarried = isMarried;
  }
}

window.onload = function () {
  //   start();
  //createPersons();

  createPersonsWithClass();
};

function start() {
  let p = {
    firstname: "Sebastian",
    age: 42,
    height: 165,
  };

  console.log(p);

  let person = document.createElement("div");
  person.innerHTML = p; // Skriva ut ett objekt i HTML -> [object Object]
  person.innerHTML = p.firstname; //Skriver ut egenskapen firstname från objektet -> "Sebastian"
  document.body.appendChild(person);

  p.address = {
    street: "Agatvägen 18",
    zip: "168 60",
    city: "Bromma",
  };

  person.innerHTML = p.address.street;
}

function createPersons() {
  let p1 = {
    name: "Sebastian",
    age: 42,
    isMarried: true,
  };

  let p2 = {
    name: "Hanna",
    age: 41,
    ismarried: true,
  };

  let p3 = {
    name: "Christoffer",
    age: 39,
    isMarried: false,
  };

  let persons = [p1, p2, p3];

  let container = document.createElement("div");
  for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);

    let personContainer = document.createElement("div");
    let heading = document.createElement("h3");
    let span = document.createElement("span");
    let married = document.createElement("span");

    heading.innerHTML = "Name: " + persons[i].name;
    span.innerHTML = "Age: " + persons[i].age;
    married.innerHTML = "IsMarried: " + persons[i].isMarried;

    personContainer.appendChild(heading);
    personContainer.appendChild(span);
    personContainer.appendChild(married);
    container.appendChild(personContainer);
  }

  document.body.appendChild(container);
}

function createPersonsWithClass() {
  let p = new Person("Sebastian", 42, true);
  let p2 = new Person("Hanna", 41, true);
  let p3 = new Person("Christoffer", 39, false);

  console.log(p);
  console.log(p2);
  console.log(p3);

  let persons = [p, p2, p3];

  let container = document.createElement("div");
  for (let i = 0; i < persons.length; i++) {
    let personContainer = document.createElement("div");
    let heading = document.createElement("h3");
    let span = document.createElement("span");
    let married = document.createElement("span");

    heading.innerHTML = "Name: " + persons[i].name;
    span.innerHTML = "Age: " + persons[i].age;
    married.innerHTML = "IsMarried: " + persons[i].isMarried;

    personContainer.appendChild(heading);
    personContainer.appendChild(span);
    personContainer.appendChild(married);
    container.appendChild(personContainer);
  }

  document.body.appendChild(container);
}
