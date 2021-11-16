window.onload = function () {
    document.getElementById("save").addEventListener("click", handleClick);
    var firstname = "Sebastian";
    var x = 17;
    var i = 10;
    var product = x * i;
    console.log(firstname);
    var sum = addition(10, 17);
    console.log(sum);
};
function addition(x, y) {
    return x + y;
}
function handleClick() {
    var myInput = document.getElementById("name");
    // let myInput = document.getElementById("name");
    var userText = myInput.value;
    var span = document.createElement("span");
    span.innerHTML = userText;
    document.body.appendChild(span);
}
