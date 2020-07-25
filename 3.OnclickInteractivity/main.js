//variable storing selected element
let element = document.querySelector("button");

//function to modify element's style parameters
function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

//assigning interactive function to the element when click
element.onclick = turnButtonRed;