//variable storing a ball element
let ball = document.getElementById('float-circle');

// function to raise the ball up 
//bottom style property stores the vertical position 
let up = function() {
  ball.style.bottom = '250px';
}

//function to putl the ball back down
let down = function() {
  ball.style.bottom = '50px';
}

//event handler property that activates function
//when a user presses a key up
document.onkeydown = up;
//event handler property that activates function
//when a user presses a key down
document.onkeyup = down;