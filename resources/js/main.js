

var pause = 0;


// background of page 
let myPage = document.querySelector('body');

function userPage(event) {

 if (myPage.style.background === "gray") {  
    myPage.style.background = "black";
  }
  else {
    myPage.style.background = "gray";
  }
}
window.setInterval(userPage, 700);



// referencing myPage background so text color do not clash 
let myText = document.getElementById('greeting');

function userText(event) {
  if (myPage.style.background === "gray") {
    myText.style.color = "black";
  }
  else {
    myText.style.color = "white";
  }
}
window.setInterval(userText, 700);






// canvas background-color switch 



function colorSwitch() {

  let can = document.querySelector('canvas');

  if (can.style.background === "black") { 
       can.style.background = "gray";
  }
  else {
    can.style.background = "black";
  }
}
let mySwitch = window.setInterval(colorSwitch, 700);




// stop canvas background-color switch 

function myStop(event) {

  if (event) {
    clearInterval(mySwitch);
  }
}
document.addEventListener('click', myStop);






function myPlay(event) {
 
  if (event) {
   colorSwitch = true;
  }
}
document.addEventListener('keypress', myPlay);





const canvas = document.querySelector('canvas');
canvas.width = 1300;        
canvas.height = 900;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'yellow';

let player_x = 20;
let player_y = 20;


ctx.fillRect(player_x, player_y, 20, 20);



