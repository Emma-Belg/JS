/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function () {

        // create url var
        const url = 'http://localhost:12345/_shared/api.json';

        //ceate asyn function which is useful because you're already waiting for the computer to get the data
        async function gettingData() {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }

        gettingData();

        //console.log(dataElement[0].alterEgo);

        let nameIn = document.getElementById("hero-name").value;
        let egoIn = document.getElementById("hero-alter-ego").value;
        let powerIn = document.getElementById("hero-powers").value;

        console.log(nameIn);

        class Hero {
            constructor(name, ego, power) {
                this.name = name;
                this.ego = ego;
                this.power = power;
            }
        }

            //making new Hero object with the input values
            let stuff = new Hero(nameIn, egoIn, powerIn);

            console.log(stuff);


    });


})();
