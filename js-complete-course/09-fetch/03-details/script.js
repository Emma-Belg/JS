/* becode/javascript
*
* /09-fetch/03-details/script.js - 11.3: details
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
            printing(data);
        }

        gettingData();


        let template = document.getElementById("tpl-hero");

        //console.log(dataElement[0].alterEgo);

        let input = document.getElementById("hero-id").value -= 1;

        //console.log(clone);

        function printing(dqdq) {

            let name = dqdq.heroes[input].name;
            let ego = dqdq.heroes[input].alterEgo;
            let abilities = dqdq.heroes[input].abilities;

            console.log(name,ego,abilities);

            let clone = template.content.cloneNode(true);
            clone.querySelector(".name").innerHTML = name;
            clone.querySelector(".alter-ego").innerHTML = ego;
            clone.querySelector(".powers").innerHTML = abilities;


            document.getElementById("target").appendChild(clone);
        }

    });

})();
