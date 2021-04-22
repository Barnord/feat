'use strict'

let userRace = prompt('What\'s your favorite 5e race?');


if (userRace.toLowerCase() == 'variant human') {
    greeting = 'How original.';
}   else {greeting = ('I too enjoy ' + userRace + '.'); }

// Asks the user what race they enjoy in 5e, changes greeting accordingly.

document.write('<h3>' + greeting + '</h3>')