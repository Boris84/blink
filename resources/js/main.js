function blink() {
  var div =
      document.getElementById('greeting');
  if (div.style.visibility == 'hidden') {
   div.style.visibility = 'visible';
  }
  else {
   div.style.visibility = 'hidden';
  }
}

 // window.setInterval(blink, 500);





let myText = document.querySelector('body');


function userText(event) {
  if (event && myText.style.background === "black") {  
  myText.style.background = "white";
  }
  else {
  myText.style.background = "black";
  }
}
document.addEventListener('click', userText);


   

