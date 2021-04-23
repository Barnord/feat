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
    cookies = confirm('Would you be willing to sign a petition to ban the race Variant Human from Fifth Edition Dungeons and Dragons?')
}
// This has nothing to do with cookies anymore.

function pictureThis() {
    document.write('<img src=\'pics/Pic' + Math.floor(Math.random() * 5 ) + '.jfif\'>')
}

function inRange(x) {
    return ((x-1)*(x-10) <= 0)
}

function manyPictures(){
    let picNumber;
    let i = 1;
    while (inRange(picNumber) == false)  {
        picNumber = prompt('How many not humans would you like to see?');
    }
    if (inRange(picNumber) == true)
        while (picNumber > 0) {
            document.write('<p>' + i + '.<img src=\'pics/Pic' + Math.floor(Math.random() * 5 ) + '.jfif\'></p>');
            picNumber--;
            i++
    }}