document.getElementById("press").animate([
    // keyframes
    { transform: 'translateY(500px)' }, 
    { transform: 'translateY(-65PX)' }
  ], { 
    // timing options
    duration: 7000,
    direction: "alternate",
    iterations: Infinity
  });