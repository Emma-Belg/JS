/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 *
 *
    let c = [];
    for (i = 0  ; i < 10; i++) {
        c[i] = document.createElement("TD");
        document.getElementById("id10").appendChild(c[i]);
        c[i].innerHTML =  i;
    }
    let r = [];
    for (x = 1; x < 10; x++) {
        r[x] = document.createElement("TR");
        document.getElementById("id10").appendChild(r[x]);
        r[x].innerHTML =  x;
    }


 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let newtable = document.createElement("TABLE");
    newtable.setAttribute("id", "id10");

    document.getElementById("target").appendChild(newtable);

    let c = [];
    for (i = 0  ; i < 10; i++) {
        c[i] = document.createElement("TD");
        document.getElementById("id10").appendChild(c[i]);
        c[i].setAttribute("id", "col" + i);
        let r = [];
        for (x = 0; x < 10; x++) {
            r[x] = document.createElement("TR");
            document.getElementById("col" + i).appendChild(r[x]);
            r[x].innerHTML =  (x+1) * (i+1);
        }
    }


})();
