//accessing ifHelper element's text
const source = document.getElementById('ifHelper').innerHTML;
//compiling text into template
const template = Handlebars.compile(source);
//object with opinion property
//based on opinion's value if or else html template will be executed
const context = {opinion: true};
//storing the template with a context as an argument
const compiledHtml = template(context);
//inserting as a HTML text into debate a compiled HTML
const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;
