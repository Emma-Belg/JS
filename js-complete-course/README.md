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

Accesing elements using css selectors: https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm 
Useful information on replacing html elements using js: https://stackoverflow.com/questions/2487290/how-to-overwrite-html-element-from-javascript
"**Notes on innerHTML and other DOM manipulation techiques**

There are a number of wrinkles around using innerHTML in certain browsers, mostly around tables and forms. If you can possibly use a library like jQuery, Prototype, etc., I'd do so, as they've got workarounds for those issues built-in.

Alternatively, you can use the various [other DOM methods](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247) rather than innerHTML (the same ones I used for creating the div and adding/removing, above). Note that in most browsers, doing any significant amount of markup by doing a bunch of createElement, appendChild, etc., calls rather than using innerHTML will be dramatically slower. Parsing HTML into their internal structures and displaying it is fundamentally what browsers do, and so they're highly optimized to do that. When you go through the DOM interface, you're going through a layer built on top of their internal structures and not getting the advantage of their optimizations. Sometimes you have to do it that way, but mostly, innerHTML is your friend."

