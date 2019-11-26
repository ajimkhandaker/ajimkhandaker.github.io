//alert("Welcome to homepage!");
//console.log("Welcome to homepage!");
document.getElementById("center2").animate([
  // keyframes
  { transform: 'translateY(500px)' }, 
  { transform: 'translateY(-65PX)' }
], { 
  // timing options
  duration: 7000,
  direction: "alternate",
  iterations: Infinity
});
document.getElementById("space").animate([
  // keyframes
  { transform: 'translateY(20px)' }, 
  { transform: 'translateY(-20px)' }
], { 
  // timing options
  duration: 5000,
  direction: "reverse",
  iterations: Infinity
  });
// document.querySelector("nav").addEventListener("click", function (){alert("Wow... thanks for visiting!")})
