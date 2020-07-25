//accessing and modifying text within an element#
//it's a string that contains raw HTML
const source = document.getElementById('greet').innerHTML;

//ability to replace Handlebars expressions
//with actual values- not raw HTML
//function that when passed an object returns a 
//completed/compiled template in a string
const template = Handlebars.compile(source);

//context object to hold values for filling out the
//Handlebars template
const context = {
  greeting: 'Hello World!'
};

//replacing Handlebars expressions with values in context
const compiledHtml = template(context);

//selecting element that will contain templated HTML
const fill = document.getElementById('hello');

//adding the compiled template HTML to the web page
//assigning compiledHtml to fill innerHTML property
fill.innerHTML = compiledHtml;
//now the browser renders value from the context object
