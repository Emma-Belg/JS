/* becode/javascript
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 * coded by leny@BeCode
 * started at 26/10/2018
 *
 I would like to keep this as notes to self

    let c = document.getElementsByClassName("material");
    c.document.getElementById("source").innerHTML = "testing";
    c.document.replaceChild('source', 'target');

 *
 // start of other possible solution part
    var element, newElement, parent;

// Get the original element
    element = document.getElementById("logo");

// Assuming it exists...
    if (element) {
        // Get its parent
        parent = element.parentNode;
        // Create the new element
        newElement = document.createElement('div');

        // Set its ID and content
        newElement.id = "logo";
        newElement.innerHTML = "-new content here-";

        // Insert the new one in front of the old one (this temporarily
        // creates an invalid DOM tree [two elements with the same ID],
        // but that's harmless because we're about to fix that).
        parent.insertBefore(newElement, element);

        // Remove the original
        parent.removeChild(element);
    }
 */

(function () {

 //Parent Element is in a section tag with a class="material"

    let newimg = document.createElement("IMG");
    newimg.src = document.getElementById("source").getAttribute("data-image");
    document.getElementById("target").appendChild(newimg);
    document.getElementById("source").remove();


})();
