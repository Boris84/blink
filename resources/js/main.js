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

   window.setInterval(blink, 500);