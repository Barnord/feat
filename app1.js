'use strict'


function getRace() {
    let userRace = prompt('What\'s your favorite 5e race?');
    let greet;
    if (userRace.toLowerCase() == 'variant human') {
        greet = 'How original.';
    }   else greet = ('I too enjoy ' + userRace + '.'); 
    document.write('<h3>' + greet + '</h3>')}


// Asks the user what race they enjoy in 5e, changes greeting accordingly.


function dynamicGreet() {
    let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18) {
    greeting = 'Good Evening';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon';
} else if (hourNow > 0) {
    greeting = 'Good Morning';
} else {
    greeting = 'Welcome';
}
document.write('<h3>' + greeting + '</h3>');
}


function askCookies(){
    cookies = confirm('Would you be willing to sign a petition to ban the race Variant Human from Fifth Edition Dungeons and Dragons?')}
