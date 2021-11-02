window.onload = function () {
  document.getElementById("start").addEventListener("click", startGeolocation);
  document.getElementById("end").addEventListener("click", endGeolocation);
};

let watch = 0;

function startGeolocation() {
  watch = navigator.geolocation.watchPosition(success, error);
}

function endGeolocation() {
  navigator.geolocation.clearWatch(watch);
}

function success(position) {
  console.log("Fick position");
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log(lat, lng);
}

function error(error) {
  console.log("FEL vid position", error);
}
