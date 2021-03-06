/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function change() {

        let x = document.getElementById("pass-one").value;
        console.log(x);

        let y = document.getElementById("pass-two").value;
        console.log(y);

        if (x !== y) {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
            document.getElementById("pass-one").setAttribute("class", "error");
            document.getElementById("pass-two").setAttribute("class", "error");
        } else {
            document.getElementById("pass-one").style.borderColor = "silver";
            document.getElementById("pass-two").style.borderColor = "silver";
        }

    });

})();
