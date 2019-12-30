/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let newimg = document.getElementsByTagName("img")[0];

    document.getElementsByTagName("img")[0].onmouseover = function  () {
        newimg.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg")
    };

    document.getElementsByTagName("img")[0].onmouseout = function  () {
        newimg.setAttribute("src", "../../_shared/img/kiss.svg")
    };


})();
