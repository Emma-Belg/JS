/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = d.getDay();
    const dayName = days[dayIndex];
    const hour = d.getHours();
    const minutes = d.getMinutes();

    console.log(months);

    document.getElementById("target").innerHTML = (dayName) + " "+ (date) + " "+ (monthName)+ " "+ (year) + " "+ (hour) + "h" + (minutes);

})();
