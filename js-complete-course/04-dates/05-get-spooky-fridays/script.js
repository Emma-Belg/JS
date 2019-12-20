/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// we need to display every months that have friday the 13th
// get the value of the input. take the year =>
// in this year check every fryday for each moth of this year.
// if there is 13 thn display it.
//


(function() {

    document.getElementById('run').addEventListener('click', function (){
    let year = document.getElementById('year').value;
    console.log(year);

    const d = new Date();
    const y = d.setFullYear(year, 0, 13);

    let month = [];
    const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


        for (let m=0; m<=11; m++) {
            d.setMonth(m);
         if (d.getDay() === 5){
            month.push(mon[m]);
         }
        }

    alert(month);
});

})();


/*    document.getElementById("run").addEventListener("click", function(year) {
        let count = 0;
        for (let month=0; month<12; month++) {
            let d = new Date();
            if(d.getDay() == 5){
                count++;
            }
            let x = document.getElementById("year").value;
            console.log(x);
        }
    });
function numberOfFriday13thsIn(year){
    var d = new Date();
    var counter = 0;
    var month;

    for(month=0;month<12;month++)
    {
        d.setFullYear(year, month,13);
        if (d.getDay() == 5)
        {
            counter++;
        }
    }
    alert(numberOfFriday13thsIn());
    return numberOfFriday13thsIn();
}*/
/*    document.getElementById("run").addEventListener("click", function(year) {
        let count = 0;
        for (let month=0; month<12; month++) {
            let d = new Date();
            if(d.getDay() == 5){
                count++;
            }
            let x = document.getElementById("year").value;
            console.log(x);
        }
    });
function numberOfFriday13thsIn(year){
    var d = new Date();
    var counter = 0;
    var month;

    for(month=0;month<12;month++)
    {
        d.setFullYear(year, month,13);
        if (d.getDay() == 5)
        {
            counter++;
        }
    }
    alert(numberOfFriday13thsIn());
    return numberOfFriday13thsIn();*/