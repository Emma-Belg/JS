/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// As there is no ReadMe here my note to self is here:
// I had a problem with recieving NAN, I have therefore used => console.log(num1) < to check what the console saw.
// My proplem was that my listener was below the the getElementById, therefore it was recievig  the blank NaN, not the entered numbers

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {

        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        //ParseInt turns a string into a value. you can also do this by putting a + in front of the document.getElementById
        let addition = (parseInt(num1) + parseInt(num2));
        alert(addition);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let substraction = (parseInt(num1) - parseInt(num2));
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let multiplication = (parseInt(num1) * parseInt(num2));
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let division = (parseInt(num1) / parseInt(num2));
        alert(division);
    });
})();
