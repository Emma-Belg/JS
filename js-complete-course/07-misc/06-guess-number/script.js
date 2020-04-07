/* becode/javascriptdata-min="1" data-max="100"
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let x = Math.floor((Math.random() * 100) + 1);
    console.log(x);

    document.getElementById("run").addEventListener("click", function () {


        let guess = document.getElementById("input").value;
        parseInt(guess);

        let guessCounter = document.getElementById("guessLeft");
        let count = 0;
        //count++;
        document.getElementById("count").innerHTML = 5 - count;
        console.log(count);


        for (i = 0; i > 5; i++) {
            if (guess > x) {
                document.getElementById("response").innerHTML = "Guess lower";
                count++;
            } else if (guess < x) {
                document.getElementById("response").innerHTML = "Guess higher";
                count++;
            } else {
                document.getElementById("response").innerHTML = "That's right!";
            }
        }

    });

    // document.getElementById('fix-part-one').addEventListener("click", function () {
    //     clearInterval(begining);
    //     document.getElementById("target").innerHTML = "+" + value1 + value2 + value3 + value4;
    // });
    //
    // let guessText = document.createElement("P");
    // guessText.setAttribute("id", "tableid");
    //
    // document.getElementById("explain").appendChild(guessText);

})();
