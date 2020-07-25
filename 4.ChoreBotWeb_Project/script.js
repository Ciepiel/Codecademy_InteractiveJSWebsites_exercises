//global variable with an element selected by id
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

//variable with an URL path- image which is supposed
//to appear when clicked (door opened)
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
//var with closed door img
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
//var selecting an element from HTML- start button
let startButton = document.getElementById("start");
//var used to prevent opening remaining doors
//if the bot already appeared
let currentlyPlaying = true;
//global variable with amount of doors in the game
let numClosedDoors = 3;
//global variables to create a logic that assigns
//generated number to different door
//empty, as they'll be assigned within the function
let openDoor1;
let openDoor2;
let openDoor3;

//function checking if a door contains bot img
let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}
//function to make each door clickable only once
const isClicked = door => {
  //checks if the door has been opened yet
  //and returns a boolean
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};
//function which will decrease the numClosedDoors var
//after each click on the door, number of doors
//available to click goes down
//and it checks the game-winning condition
//(numClosedDoors === 0) and if so, calls gameOver()
const playDoor = (door) => {
  //decreasing numClosedDoors var
  numClosedDoors--;
  //calling gameOver() if winning condition achieved
  if (numClosedDoors === 0) {
    //arg 'win' to change the startButton text when
    //all the doors are open
    gameOver('win');
    //checks if there's a bot behind the door
  } else if (isBot(door)) {
    gameOver();
  }
};
//function to randomly generate the door with ChoreBot
const randomChoreDoorGenerator = () => {
  //var to randomly generate a whole number 0-2
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  //conditions with botDoorPath assigned
  //when condition is satisfied, it will display 
  //given images
  if (choreDoor === 0) {
     openDoor1 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
  } else {
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
  }
}

//assigning interactive function to the element when
//clicked- with arrow function
doorImage1.onclick = (doorImage1) => {
  //checking if the door has not been clicked and the
  //game is still on
  if (currentlyPlaying && !isClicked(doorImage1)) {
  //changing the source of the door img to the functions
  //so when clicked it will display an image generated
  //by the random generator function
  doorImage1.src = openDoor1;
  //calling playDoor() func to decrease num of doors
  //and check if winning condition has been satisfied
  playDoor();
  }
};
doorImage2.onclick = (doorImage2) => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor();
  }
};
doorImage3.onclick = (doorImage3) => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor()
  }
};

//startRound func to start new game and reset the values
//giving the variables original values
const startRound = () => {
  numClosedDoors = 3;
  doorImage.src = closedDoorPath;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
}

//click handler function for the StartButton
//resets the values and starts a new round
startButton.onclick = () => {
  //calls a function to start the round
  //if statement to prevent reseting the game mid-round
  if(!curentlyPlaying) {
    startRound();
  }
}

//calling the generator function
randomChoreDoorGenerator();

//creating a gameOver function to end the game
  const gameOver = (status) => {
  //win/loss based on the status
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  //reassigning default value of the currentlyPlaying var
  //to stop the possibility to open remaining door
  currentlyPlaying = false;
}

//calling the start round function
startRound();
