// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below


// function changing the background color of the piano
//keys when pressed (mouse press down)
let keyPlay = function(event) {
  //target returns the element which triggered the event
  event.target.style.backgroundColor = '#6df0c2';
}
// function changing the background color of the keys
//to the default (thanks to '') when press released
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}
//assigning functions as the values to the event handlers
let eventAssignment = function(note) {
//when mouse pressed down on the note, keyPlay activates
//note is a event target
  note.onmousedown = function() {
    keyPlay(event);
  }
//when mouse released on the note, keyReturn activates
  note.onmouseup = function() {
    keyReturn(event);
  }
}  

// by iterating through the notes we give each of them
//the acces to the event assignment function
//in order to execute background change whenever
//any of them is being pressed and released
notes.forEach(eventAssignment);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// anonymous event handler property and function for the first progress button to hide it and release the next one
nextOne.onclick = function() {
  //hiding the original and releasing the new button
  nextTwo.hidden = false;
  nextOne.hidden = true;
  //modifying letter-notes
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
}

// anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  //hiding the original and releasing the new button
  nextThree.hidden = false;
  nextTwo.hidden = true;
  //modifying letter-notes
  document.getElementById('word-five').innerHTML = 'DEAR'
  document.getElementById('word-six').innerHTML = 'FRI-'
  //making '-END' appear by changing its display
  //'-END' is stored in the variable lastLyric
  lastLyric.style.display = 'inline-block'
  //changing the music notes
  document.getElementById('letter-note-three').innerHTML = 'G'
  document.getElementById('letter-note-four').innerHTML = 'E'
  document.getElementById('letter-note-five').innerHTML = 'C'
  document.getElementById('letter-note-six').innerHTML = 'B'
}

// anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  //hiding the original and releasing the new button
  startOver.hidden = false;
  nextThree.hidden = true;
  //modifying letter-notes
  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU!'
    //making '-END' disappear by changing its display
  //'-END' is stored in the variable lastLyric
  lastLyric.style.display = 'none'
  //changing the music notes
  ocument.getElementById('letter-note-one').innerHTML = 'F'
  ocument.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}