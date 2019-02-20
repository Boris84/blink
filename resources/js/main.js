

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


let player_x = 0;
let player_y = 50;







// start square game // 
document.getElementById('button').onclick = function step() {
  
  function step() {
    ctx.clearRect(0, 0, 1300, 950);
    ctx.fillStyle = 'yellow';
    player_x +=3;
    ctx.fillRect(player_x, player_y, 30, 30);
    myFrame = requestAnimationFrame(step)

  if (player_x >= 1300) {
    player_x = 0;
    ctx.clearRect(0, 0, 1300, 950);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(player_x, player_y, 30, 30);
    }
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
