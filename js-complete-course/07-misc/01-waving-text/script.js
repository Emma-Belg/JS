/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 *
 *
 *     const startTime = new Date().getTime();
    const waveLetters = document.getElementsByClassName("material");
    const waveTarget = document.getElementById('target')[0];
    for (let i = 0; i < waveLetters.length; i++) {
        function wave (${ waveLetters[i] }).appendTo(waveTarget);
    }
    function runWave() {
        const width = $(window).width();
        const letterSpacing = width > 900 ? 24 : 16;
        const elapsed = new Date().getTime() - startTime;
        const pos = elapsed * 0.05;
        wave ('.animated-wave .letter').each(function(index, letter) {
            const posx = width - (pos - letterSpacing * index) % width;
            const posy = Math.sin(posx / 40) * 20;
            $(letter).css('left', posx + 'px');
            $(letter).css('top', posy + 'px');
        });
    }
    setInterval(runWave, 30);
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //get text from HTML content. '.textContent' is needed to get the text out of it
    let text = document.getElementById("target");
    let textCont = text.textContent;


    // split the text into individual letters. This is the element that needs to be wrapped later
    let letters = textCont.split("");
    console.log(letters);
    let wrap = [];


    for (let i=0; i < letters.length; i++) {

      //  for (let l=0; l < letters.length; l+5){}
        //creating element to wrap each letter
        wrap[i] = document.createElement("span");
        //concatinate the below so that I can use if for the style size
        let size = "font-size:"+[i]+2+"px";
        wrap[i].setAttribute("style", size);
        let newSpan = document.createTextNode(letters[i]);
        wrap[i].appendChild(newSpan);
        text.appendChild(wrap[i]);

        //trying to make it go smaller again... it's not working
        let big = "font-size:"+700+"px";
        if (size > big) {
            for (let x=50; x < letters.length; x++) {
                let sizeSm = "font-size:" + [x] - 8 + "px";
                wrap[x].setAttribute("style", sizeSm);
                let newSpan = document.createTextNode(letters[x]);
                wrap[x].appendChild(newSpan);
                text.appendChild(wrap[x]);
            }
        }
    }



    // insert wrapper before el in the DOM tree
    //letters.prepend(wrap, letters);

    //move letters into wrapper
    //wrap.appendChild(letters);



})();
