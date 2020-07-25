//variables storing elements
let door = document.getElementById('door');
let unlock = document.getElementById('unlock');
let lock = document.getElementById('lock');
let sign = document.getElementById('sign');
let cafeImage = document.getElementById('image');

//image of the interior hidden by default
cafeImage.hidden = true;

//function to open the door- hides the door image
//and display interior image
let openDoor = function() {
  door.hidden = true;
  cafeImage.hidden = false;
}

//function to close the door- display the door image
//and hides interior image
let closeDoor = function(){
  door.hidden = false;
  cafeImage.hidden = true;
}

//event assigned to click on unlock button
//sign changes the text to OPEN
//changes the background of the unlock button
//changes the background of the lock button
unlock.onclick = function() {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
}

//event assigned to click on lock button
//sign changes the text to CLOSED
//changes the background of the lock button
//changes the background of the unlock button
lock.onclick = function() {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
}

//another event added to unlock button
//when clicked, activates events on another elements
//click event activated on the door element- triggers
//the function openDoor and when image changed to 
//interior- activates onclick closeDoor function
unlock.addEventListener('click', function(){
  door.addEventListener('click', openDoor);
  cafeImage.addEventListener('click', closeDoor);
})

//event listener on lock element- when clicked it
//activtes anonymous function with removing event
//from the door- openDoor desactivated
//-> when lock button clicked, it's impossible to
//click on the door and open them
lock.addEventListener('click', function() {
  door.removeEventListener('click', openDoor);
})