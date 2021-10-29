class Plane {
  constructor() {
    this.brand = "";
    this.model = "";
    this.capacity = 0;
    this.distance = 0;
    this.trips = [];
  }

  fly(tripDistance = 0) {
    this.distance += tripDistance;
    console.log("Nu flyger", this.brand, "-", this.model, ":", tripDistance);
    this.trips.push(tripDistance);
  }
}

window.onload = function () {
  localStorages();
};

function createPlanes() {
  let plane = new Plane();
  plane.brand = "Boeing";
  plane.model = "747";
  plane.capacity = 250;

  let secondPlane = new Plane();
  secondPlane.brand = "Cessna";
  secondPlane.model = "1";
  secondPlane.capacity = 2;

  plane.fly(10000);
  secondPlane.fly(50);
  plane.fly(12000);

  console.log(plane);
  console.log(secondPlane);
}

function localStorages() {
  localStorage.setItem("someText", "Lorem ipsum");

  // ... Här är det ca 2 minuter

  let text = localStorage.getItem("someText");
  console.log(text);

  let plane = new Plane();
  plane.brand = "Airbus";
  plane.model = "A720";
  plane.capacity = 100;

  plane.fly(10000);
  plane.fly(15000);

  console.log(plane);

  let planeAsText = JSON.stringify(plane);
  localStorage.setItem("plane", planeAsText);

  let thePlaneFromLocalstorage = localStorage.getItem("plane");

  let planeAsObject = JSON.parse(thePlaneFromLocalstorage);

  for (let i = 0; i < planeAsObject.trips.length; i++) {
    console.log("Flygning ", i + 1, "var", planeAsObject.trips[i], "lång");
  }
}
