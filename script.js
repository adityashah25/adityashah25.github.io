/* This is to turn on overlay effect on emoji image */

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
  function off() {
    document.getElementById("overlay").style.display = "none";
}

// This is for the skill bar animation

function skillBaranimation(){
  var boxOne = document.getElementById("boxone");
  var boxTwo = document.getElementById("boxtwo");
  var boxThree = document.getElementById("boxthree");
  var boxFour = document.getElementById("boxfour");
  var boxFive = document.getElementById("boxfive");
  boxOne.style.width = "71.25%";
  boxOne.style.transition = "width 0.35s ease-out";
  boxTwo.style.width = "57%";
  boxTwo.style.transition = "width 0.35s ease-out 0.25s";
  boxThree.style.width = "80.75%";
  boxThree.style.transition = "width 0.35s ease-out 0.35s";
  boxFour.style.width = "57%";
  boxFour.style.transition = "width 0.35s ease-out 0.45s";
  boxFive.style.width = "47.5%";
  boxFive.style.transition = "width 0.35s ease-out 0.55s";
}

// alert("width: " + 1440px + ", height: " + 960px)