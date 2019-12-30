/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let newtable = document.createElement("TABLE");
    newtable.setAttribute("id", "tableid");

    document.getElementById("target").appendChild(newtable);

    let rows = [];
    for (i = 0; i < 10; i++) {
        rows[i] = document.createElement("TR");
        document.getElementById("tableid").appendChild(rows[i]);
            rows[i].innerHTML = "testing " + i;
    }


/*
let c = document.getElementsByClassName("material");
let newimg = document.createElement("IMG");
newimg.src = "http://www.randomkittengenerator.com/cats/rotator.php";
document.getElementById("target").appendChild(newimg);


    let row = 0;
    for (let t = 0; t < 9; t++) {
        row = rows[t];
    }


 */

})();