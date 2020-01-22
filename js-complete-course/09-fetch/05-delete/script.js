/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {

        let input = parseInt(document.getElementById("hero-id").value) - 1;

        fetch('http://localhost:12345/_shared/api.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);

                let newArray = myJson.heroes.splice(input, 1);
                console.log(newArray    );
            });

    });
})();
