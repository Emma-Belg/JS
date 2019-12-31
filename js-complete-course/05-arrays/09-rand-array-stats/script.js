/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function (){

    let numbers = [];
    for (i = 0; i < 10; i++) {
        numbers [i] = Math.floor((Math.random() * 100) + 1);
        document.getElementById("n-" + (i+1)).innerHTML= numbers [i];
    }

        document.getElementById("min").innerHTML= Math.min.apply( null, numbers);
        document.getElementById("max").innerHTML= Math.max.apply( null, numbers);

        let total = 0;
        for (var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        var avg = total / numbers.length;
        document.getElementById("average").innerHTML= (avg);
        document.getElementById("sum").innerHTML= (total);
});

})();
