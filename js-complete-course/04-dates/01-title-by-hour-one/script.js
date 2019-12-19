/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    document.getElementById("target").innerHTML = function printDate() {

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function printDate() {
        let d = new Date();
        let h = addZero(d.getHours());
        if (h() < 18) {
            let x = document.getElementById("target");
            x.innerHTML = "Hello!";
        }
        else (h() >= 18);{
            let y = document.getElementById("target");
            y.innerHTML = "Good evening";
        }
    }

            }

})();
