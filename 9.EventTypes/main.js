// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will create color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')'; 
  //changes the background color of the event target
  //to randomColor
  event.target.style.backgroundColor = randomColor;
}

//event handler for the button to change color
//applies function and modifies the background color 
//every time 'pick a color' is clicked
button.onclick = colorChange;

//event handler for the mystery button to change color
//applies function and modifies the background color 
//every time the mouse's wheel is rotated or
//mousepad uses slide down
mysteryButton.onwheel = colorChange;