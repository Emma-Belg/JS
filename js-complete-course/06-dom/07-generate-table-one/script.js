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
    let tablecol = document.createElement("TD");
    document.getElementById("target").appendChild(newtable);
    document.getElementById("target").appendChild(tablecol);

    rows = [];
    for (i = 0; i < 10; i++) {
        document.createElement("TR");
    }
    
    let row = 0;
    for (let t = 0; t < 9; t++) {
     row = rows[t];
    }


/*
let c = document.getElementsByClassName("material");
let newimg = document.createElement("IMG");
newimg.src = "http://www.randomkittengenerator.com/cats/rotator.php";
document.getElementById("target").appendChild(newimg);

 */

})();