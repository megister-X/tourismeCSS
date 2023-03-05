// Responsive menu

function fonctResponsive() {
  var x = document.getElementById("navBarre");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}