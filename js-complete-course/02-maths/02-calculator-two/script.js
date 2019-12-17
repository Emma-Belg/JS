/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function Cal (calc) {

    let num1 = document.getElementById("op-one").value;
    let num2 = document.getElementById("op-two").value;

    let result;

    //let sums = prompt ("Please enter your age.");
    switch (calc) {
        case 'addition':
            result = parseInt(num1) + parseInt(num2);
            alert(result);
            break;
        case 'subtraction':
            result = parseInt(num1) - parseInt(num2);
            alert(result);
            break;
        case 'multiplication':
            result = parseInt(num1) * parseInt(num2);
            alert(result);
            break;
        case 'division':
            result = parseInt(num1) / parseInt(num2);
            alert(result);
            break;
        default:
            alert("please only enter numbers");
    }



}

