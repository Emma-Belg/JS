# La Prairie: JavaScript

Welcome to the JavaScript folder.

## Structure

The file consists of 48 exercises, divided into 7 series.  
Don't be afraid of the number: most of these exercises are very short and focus on a particular aspect.  
The exercises follow one another in a logical _relatively_ way, but don't let one exercise stop you: go to the next, come back to it later.

Each exercise must be done.  
NOTE: **Note: **The exercises in series 7 are a little more complex, worth a try: they are good syntheses of the progress made.

#### Local server

Some exercises may require running the code on a _local server_.  
This is a good practice that should always be applied. I recommend that you install[node.js](https://nodejs.org/en/) on your machines, then install[**sèvè**](https://github.com/leny/seve), a small utility that generates a local server from your command line.

## Resources

To get the most out of these exercises, some useful resources:

- [Silent Teacher](http://silentteacher.toxicode.fr/) - learn and have fun
- [Solo Learn - Javascript](https://www.sololearn.com/Course/JavaScript/) :uk:
- [Sabe - Javascript](https://sabe.io/classes/javascript) :uk:
- [Mozilla Javascript Guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Apropos) :uk: :fr:
- [jsfiddle](https://jsfiddle.net/) - to test your js codes
- [learn x in y minutes](https://learnxinyminutes.com/docs/javascript/)
- [learn js](http://www.learn-js.org/)
- [10 js array methods](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3)

* * *

Good work!

![](https://media.giphy.com/media/xT9DPPqwOCoxi3ASWc/giphy.gif)



***
## Notes to self

* document.getElementById("......").addEventListener("click", function() 

### 01 Base

### 02 Math 

*Factorial*
I could have also used the below function (the ? is a form of mini if else - more research needed.)
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}



### 03 Colours

### 04 Dates

### 05 Arrays

confused by 5.10, I'm trying to just pull out the ages from the array but having trouble. I found this 
https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
but I don't understand .map. I need to research more.
    let ageOb = people.map(({ age }) => age);
    return ageOb;

    console.log(ageOb);




### 06 DOM

About DOM: "When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.
The HTML DOM is a standard object model and programming interface for HTML. It defines:
* The HTML elements as objects
* The properties of all HTML elements
* The methods to access all HTML elements
* The events for all HTML elements

In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements." https://www.w3schools.com/js/js_htmldom.asp
"**The DOM Programming Interface**
The HTML DOM can be accessed with JavaScript (and with other programming languages).In the DOM, all HTML elements are defined as objects.The programming interface is the properties and methods of each object.
A **property** is a value that you can get or set (like changing the content of an HTML element).
A **method** is an action you can do (like add or deleting an HTML element).
eg: document.getElementById("demo").innerHTML = "Hello World!";
In the example above, getElementById is a **method**, while innerHTML is a **property**."
"The HTML DOM document object is the owner of all other objects in your web page. The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object." hence why we write *document*.getElement .... because we need to access it in the *document* first.

**Changing HTML Elements**

| Property      | Description |
| ----------- | ----------- |
| element.innerHTML =  new html content    | Change the inner HTML of an element     |
| element.attribute = new value  | Change the attribute value of an HTML element      |
| element.style.property = new style  |  Change the style of an HTML element   |
| **Method**  |  **Description**   |
| element.setAttribute(attribute, value)  |  Change the attribute value of an HTML element |



**Adding and Deleting Elements**
| Method | Description  |
|----- | -------|
| document.createElement(element) | Create an HTML element |
| document.removeChild(element) | Remove an HTML element |
| document.appendChild(element) | Add an HTML element |
| document.replaceChild(new, old) | Replace an HTML element |
| document.write(text)  | Write into the HTML output stream |

read further https://www.w3schools.com/js/js_htmldom_document.asp
	

Accesing elements using css selectors: https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm 
Useful information on replacing html elements using js: https://stackoverflow.com/questions/2487290/how-to-overwrite-html-element-from-javascript
"**Notes on innerHTML and other DOM manipulation techiques**

There are a number of wrinkles around using innerHTML in certain browsers, mostly around tables and forms. If you can possibly use a library like jQuery, Prototype, etc., I'd do so, as they've got workarounds for those issues built-in.

Alternatively, you can use the various [other DOM methods](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247) rather than innerHTML (the same ones I used for creating the div and adding/removing, above). Note that in most browsers, doing any significant amount of markup by doing a bunch of createElement, appendChild, etc., calls rather than using innerHTML will be dramatically slower. Parsing HTML into their internal structures and displaying it is fundamentally what browsers do, and so they're highly optimized to do that. When you go through the DOM interface, you're going through a layer built on top of their internal structures and not getting the advantage of their optimizations. Sometimes you have to do it that way, but mostly, innerHTML is your friend." .. "I strongly encourage you to 'actually replace the element itself'. Using innerHTML is convenient sometimes, but can also be a vulnerability other times. So if this is your first DOM-adventure, I encourage you to do it the long way at least this once."

