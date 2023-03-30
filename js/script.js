

// Parallax
// let text = document.getElementById('text');
// let text = document.getElementById('text');
let soleil = document.getElementById('soleil');
let nuage1 = document.getElementById('nuage1');
let nuage2 = document.getElementById('nuage2');
let avion = document.getElementById('avion');
let nuage3 = document.getElementById('nuage3');
let nuage4 = document.getElementById('nuage4');
let bulles = document.getElementById('bulles');
let meduse = document.getElementById('meduse');
let fish1 = document.getElementById('poisson1');
let fish2 = document.getElementById('poisson2');

window.addEventListener('scroll', ()=>{
  let value = window.scrollY;
  let valuex = window.scrollX;

  soleil.style.bottom = value * 0.25 + 'px';
  nuage1.style.right = value * -0.05 + 'px';
  nuage2.style.left = value * 0.08 + 'px';
  nuage3.style.left = value * 0.15 + 'px';
  nuage4.style.left = value * 0.08 + 'px';
  avion.style.left = value * 0.8 + 'px';
  meduse.style.bottom = valuex * 2.5 + 'px';
  poisson1.style.right = value * 0.2 + 'px';
  poisson2.style.left = value * 0.3 + 'px';
  bulles.style.bottom = value * 0.03 + 'px';
})


// Responsive menu

function fonctResponsive() {
  var x = document.getElementById("navBarre");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}