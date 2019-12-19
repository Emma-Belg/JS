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
    document.getElementById("run").addEventListener("click", function () {
        let d = document.getElementById("dob-day").value;
        let m = document.getElementById("dob-month").value;
        let y = document.getElementById("dob-year").value;

        let now = new Date();
        let toyear = now.getFullYear();
        let tomon = now.getMonth();
        let today = now.getDate();

        let age = toyear - y;
        if (tomon < (m - 1))
        {
            age--;
        }

        if (((m - 1) == tomon) && ( today < d))
        {
            age--;
        }
        return age;
        alert(age);
    });

})();

