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

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    let p = printDate();
    console.log = p;

    function printDate() {
        let d = new Date();
        let h = addZero(d.getUTCHours());
        let m = addZero(d.getUTCMinutes());
        if (h < 17 && m < 30) {
            document.getElementById("target").innerHTML = "hello!";
            document.write = h+m;
        }
        else (h > 17 && m > 0); {
            document.getElementById("target").innerHTML = "Good Evening";
            document.write = h+m;
        }
    }


})();
