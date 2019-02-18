

// background of page //
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







// referencing myPage background so text color do not clash //
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







// canvas Specs //
const canvas = document.querySelector('canvas');
canvas.width = 1300;        
canvas.height = 900;
const ctx = canvas.getContext('2d');


let player_x = 20;
let player_y = 20;
let base_x = Math.floor(Math.random() * 1250);
let base_y = Math.floor(Math.random() * 850);







// start square game // 
document.getElementById('button').onclick = function step() {
  
  function step() {
    ctx.clearRect(0, 0, 1300, 950);
    ctx.fillStyle = 'yellow';
    player_x +=3;
    ctx.fillRect(player_x, player_y, 30, 30);
    myFrame = requestAnimationFrame(step)
    
    }
  requestAnimationFrame(step);
}






// directional keys for game //
function handleInput(event) {
  const key = event.key;
  
  if (key === 'a') {
      player_x -= 15;
  }
  else if (key === "w") {
      player_y -= 15; 
  }
  else if (key === "d") {
      player_x += 15;
  }
  else if (key === "s") {
      player_y += 15;
  }
}

document.addEventListener('keypress', handleInput);






// pause square game //
function stopMe(event) {
  const key = event.key;

  if (key === 'g') {
    cancelAnimationFrame(myFrame);
  }
}
document.addEventListener('keypress', stopMe)
