/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let min1 = 460;
    let min2 = 0;
    let min3 = 0;
    let min4 = 0;

    let start2 = "00";
    let start3 = "00";
    let start4 = "00";


    if (min3 < 10) {
        min3 = "0" + min3;
    }
    if (min4 < 10) {
        min4 = "0" + min4;
    }
    document.getElementById('part-one').addEventListener("click" , function() {
        min1++;
        document.getElementById("target").innerHTML = "+" + min1 + start2 + start3 + start4;

    });


    document.getElementById('part-two').addEventListener("click" , function() {
        min2++;
        if (min2 < 10) {
            start2 = "0" + min2;
        }
        else {
            start2 = min2;
        }
        document.getElementById("target").innerHTML = "+" + min1 + start2 + start3 + start4;
    });

    document.getElementById('part-three').addEventListener("click" , function() {
        min3++;
        if (min3 < 10) {
            start3 = "0" + min3;
        }
        else {
            start3 = min3;
        }
        document.getElementById("target").innerHTML = "+" + min1 + start2 + start3 + start4;
    });


    document.getElementById('part-four').addEventListener("click" , function() {
        min4++;
        if (min4 < 10) {
            start4 = "0" + min4;
        }
        else {
            start4 = min4;
        }
        document.getElementById("target").innerHTML = "+" + min1 + start2 + start3 + start4;
    });


})();
