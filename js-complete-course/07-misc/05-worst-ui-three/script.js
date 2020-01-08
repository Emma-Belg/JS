/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let start2 = "00";
    let start3 = "00";
    let start4 = "00";


    function roller() {
        let first = document.getElementById('part-one');
        first.value = Math.floor(Math.random() * (499 - 460) + 460);

        let second = document.getElementById('part-two');
        second.value = Math.floor(Math.random() * 99);

        let third = document.getElementById('part-three');
        third.value = Math.floor(Math.random() * 99);

        let fourth = document.getElementById('part-four');
        fourth.value = Math.floor(Math.random() * 99);

        let value1 = first.value;
        let value2 = second.value;
        let value3 = third.value;
        let value4 = fourth.value;

        document.getElementById('fix-part-one').addEventListener("click", function () {
            clearInterval(begining);
            document.getElementById("target").innerHTML = "+" + value1 + value2 + value3 + value4;
        });


        document.getElementById('fix-part-two').addEventListener("click", function () {
            clearInterval(begining);
            value2++;
            if (value2 < 10) {
                start2 = "0" + value2;
            }
            else {
                start2 = value2;
            }
            document.getElementById("target").innerHTML = "+" + value1 + value2 + value3 + value4;
        });

        document.getElementById('fix-part-three').addEventListener("click", function () {
            clearInterval(begining);
            value3++;
            if (value3 < 10) {
                start3 = "0" + value3;
            }
            else {
                start3 = value3;
            }
            document.getElementById("target").innerHTML = "+" + value1 + value2 + value3 + value4;
        });

        document.getElementById('fix-part-four').addEventListener("click", function () {
            clearInterval(begining);
            value4++;
            if (value4 < 10) {
                start4 = "0" + value4;
            }
            else {
                start4 = value4;
            }
            document.getElementById("target").innerHTML = "+" + value1 + value2 + value3 + value4;
        });

        return first.value;
    }

/*    document.getElementById('part-two').addEventListener("click" , function() {
        min2++;
        if (min2 < 10) {
            start2 = "0" + min2;
        }
        else {
            start2 = min2;
        }
        document.getElementById("target").innerHTML = "+" + min1 + to99 + start3 + start4;
    });*/


    /*    let speed = 100;
        function begin()
        {
            roller();
            setTimeout(begin, speed, window);
        }
        document.addEventListener('DOMContentLoaded', function () {
            begin();
        });*/


    let begining = setInterval(roller, 100);


    /*   document.getElementById("part-one").innerHTML = "+" + first;
       document.getElementById("part-two").innerHTML = to99;



       document.getElementById('part-one').addEventListener("click" , function() {
           min1++;
           document.getElementById("target").innerHTML = "+" + first + start2 + start3 + start4;

       });




       document.getElementById('part-three').addEventListener("click" , function() {
           min3++;
           if (min3 < 10) {
               start3 = "0" + min3;
           }
           else {
               start3 = min3;
           }
           document.getElementById("target").innerHTML = "+" + min1 + start2 + to99 + start4;
       });


       document.getElementById('part-four').addEventListener("click" , function() {
           min4++;
           if (min4 < 10) {
               start4 = "0" + min4;
           }
           else {
               start4 = min4;
           }
           document.getElementById("target").innerHTML = "+" + min1 + start2 + start3 + to99;
       });*/


})();
