/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let dataElement;

        fetch('http://localhost:12345/_shared/api.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
               dataElement = myJson.heroes;
               test(dataElement);
            });
function test (anything){
    console.log(anything);
    console.log(anything[0].name);
}

    let template = document.getElementById("tpl-hero");

    //console.log(dataElement[0].alterEgo);

    document.getElementById("run").addEventListener("click", function () {

       //console.log(clone);

        dataElement.forEach(function (element, index) {

            let clone = template.content.cloneNode(true);
            clone.querySelector(".name").innerHTML = element.name;
            clone.querySelector(".alter-ego").innerHTML = element.alterEgo;


            document.getElementById("target").appendChild(clone);

        });

    });

})();
