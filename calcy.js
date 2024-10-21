var num = document.querySelectorAll("#keyboard>div");
var bag = document.querySelector("#display");
for (var a = 0; a < num.length; a++) {
  num[a].addEventListener("click", myCalcultor);
}
function myCalcultor() {
  // console.log("clicked an  any button");
  // console.log(event.target.innerText);
  var targetNumber = event.target.innerText;
  switch (targetNumber) {
    case "C":
      bag.innerText = "";
      break;
    case "=":
      bag.innerText = eval(bag.innerText);
      break;
    default:
      bag.innerText += targetNumber;
  }
}
