//var accessing read more button in HTML
let readMore = document.getElementById('read-more')
//var accessing more info paragraph in HTML
//by default is not displayed (CSS)
let moreInfo = document.getElementById('more-info')

//event handler property (on click) for the button
//will execute the function when clicked
readMore.onclick = function() {
  //function modfying the CSS of the more info 
  //paragraph- change display from none to block when 
  //clicked
  moreInfo.style.display = 'block';
}