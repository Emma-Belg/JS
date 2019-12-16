/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function rerun() {

    let q1;
        q1 = prompt ("How old are you?");

    let q2;
    q2 = prompt ("what is your gender?");

    let q3;
    q3 = prompt ("where do you live?");

    let q4;
    q4 = prompt ("Is this correct? yes/no  " + q1 + " " + q2 + " " + q3);

    if (q4 == "yes") {
        alert ("thank you!");
    }
    else (q4 == "no")
    {
        rerun();
    }


})();
