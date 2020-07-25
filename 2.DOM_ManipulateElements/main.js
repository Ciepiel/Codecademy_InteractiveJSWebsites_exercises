//creating new element- list item
let newDestination = document.createElement('li');
//assigning an id to the element
newDestination.id = 'oaxaca';
//assigning text to the element
newDestination.innerHTML = 'Oaxaca, Mexico';
//appending newly created list item to the list
//with an id 'more-destinations'
document.getElementById('more-destinations').appendChild(newDestination);

//variable with selected parent element (list)
const parent = document.querySelector("#more-destinations");
//variable with selected child element (list item)
const child = document.querySelector("#oaxaca");
//removing child element
parent.removeChild(child);

