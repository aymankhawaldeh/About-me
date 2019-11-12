'use strict'

var name = prompt(' what is your name? ');
alert(' welocme ' + name + ' i wanna ask u 5 questions and u must answer with yes/no also y/n ');

var answer = prompt(' We have 7 skyes ? ')
var answer = answer.toUpperCase();
switch (answer) {
    case 'YES':
        alert('correct');

        //console.log( ' wow thats true ');

        break;
    case 'Y':
        alert('correct');
        //console.log( ' wow thats true ');

        break;
    case 'NO':
        alert(' incorrect');
        //console.log( ' incorrect  ');

        break;
    case 'N':
        alert('incorrect');
        //console.log( ' incorrect  ');

        break;

    default:
        alert('wrong answer ');
        //console.log( ' wrong  ')

        break;
}

var messi = prompt(' misse is  bitter than ronaldo ? ');
var messi = messi.toUpperCase();
switch (messi) {
    case 'YES':
        alert(' correct');
        //console.log( ' wow thats true ');

        break;
    case 'Y':
        alert('correct');
        //console.log( ' wow thats true ');

        break;
    case 'NO':
        alert('incorrect');
        break;
    case 'N':
        alert(' incorrect');
        break;

    default:
        alert(' wrong answer ');
        //console.log( ' wrong  ');

        break;
}
//console.log( ' wow thats true ');


var god = prompt(' Allah is the only god ? ');
var god = god.toUpperCase();
switch (god) {
    case 'YES':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'Y':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'NO':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;
    case 'N':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;

    default:
        alert(' wrong answer ');
        //console.log( ' wrong  ')

        break;
}


var cute = prompt(' are you beautiful ? ');
var cute = cute.toUpperCase();
switch (cute) {
    case 'YES':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'Y':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'NO':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;
    case 'N':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;

    default:
        alert(' wrong answer ');
        //console.log( ' wrong  ')

        break;
}

var food = prompt(' do you love food ? ');
var food = food.toUpperCase();
switch (food) {
    case 'YES':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'Y':
        alert(' correct');
        //console.log( ' wow thats true ')

        break;
    case 'NO':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;
    case 'N':
        alert(' incorrect answer');
        //console.log( ' incorrect  ')

        break;

    default:
        alert(' wrong answer ');
        //console.log( ' wrong  ')


        break;
}


alert(' Welcome again ' + name);
