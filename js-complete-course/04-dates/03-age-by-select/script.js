/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let d = document.getElementById("dob-day").addEventListener("change").value;
    let m = document.getElementById("dob-month").addEventListener("change").value;
    let y = document.getElementById("dob-year").addEventListener("change").value;

    document.getElementById("run").addEventListener("click", function   () {
        alert(d + " ," + m + " ," + y)
    })

})();
