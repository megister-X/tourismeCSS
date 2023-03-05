// Responsive menu

function myFunction() {
  var x = document.getElementById("navBarre");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}