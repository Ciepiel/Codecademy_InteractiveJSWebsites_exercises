//variables selecting HTML elements-buttons and img
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

//function to change display of the close button
//and Codey image- they apper
let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

//dunction to change display of the close button and
//Codey image- they disappear
let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

//calling open function when clicked on view button
view.onclick = open;
//calling hide function when clicked on close button
close.onclick = hide;

//function to change text on the view button
let textChange = function() {
  view.innerHTML = "Hello World!";
}

//function to change text on the view button to default
let textReturn = function() {
  view.innerHTML = "View";
}

//calling text change function when clicked on view
//view element has already assigned an event property
//onclick; adding another with addEventListener
view.addEventListener('click', textChange);

//calling text return function when clicked on close
//close element has already assigned an event property
//onclick; adding another with addEventListener
close.addEventListener('click', textReturn);