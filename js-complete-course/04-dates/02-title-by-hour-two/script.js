/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"


    let p = printDate();
    console.log = p;

    function printDate() {
        let d = new Date();
        let h = d.getUTCHours();
        let m = d.getUTCMinutes();
        if (h >= 17 && minutes >= 30){
            document.getElementById("target").innerHTML = "good evening"
        }
        else if (h >= 18) {
            document.getElementById("target").innerHTML = "good evening!";
        }
        else {
            document.getElementById("target").innerHTML = "hello";
        }
    }


})();
