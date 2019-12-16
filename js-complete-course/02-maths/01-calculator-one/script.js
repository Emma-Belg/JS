/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let addition = $("#op-one") + $("#op-two");
        document.write(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let substraction = 10 - 5;
        document.write(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let multiplication = 10 * 5;
        document.write(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        let division = 10 / 5;
        document.write(division);
    });
})();