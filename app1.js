let userRace = prompt('What\'s your favorite 5e race?');
let greeting;

if (userRace.toLowerCase() == 'variant human') {
    greeting = 'bad choice';
}   else {greeting = 'I too enjoy ' + userRace + '.'; }

document.write('<h1>' + greeting + '</h1>');