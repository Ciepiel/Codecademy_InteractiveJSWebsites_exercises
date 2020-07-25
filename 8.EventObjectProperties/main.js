//variavbles storing HTML elements- social media icons
//activated when share button is clicked, text
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

//function which takes an event as an argument
//changes the display of the event to none- so the
//social media icons will appear
//puts the text and timestamp 
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = 'You share the puppy in ' 
  + event.timeStamp + ' ms.';
}

//function is activate with click on share button
share.onclick = sharePhoto;