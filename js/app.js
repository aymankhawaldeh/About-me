'use strict'
var points = 0;
var name = prompt(' what is your name? ');
alert(' Hi ' + name + ' i wanna ask u 7 questions and u must answer with yes/no also y/n ');

function validateOne() {
    var one = prompt('Do We have 7 skyes ? ')
    while (one === '') {
        one = prompt('please answer with yes or no !')
    }
    return one;

}


// var name = prompt(' what is your name? ');
// alert(' welocme ' + name + ' i wanna ask u 7 questions and u must answer with yes/no also y/n ');

function sky() {

    // var answer = prompt(' We have 7 skyes ? ')
    var answer = validateOne();
    var answer = answer.toUpperCase();
    switch (answer) {
        case 'YES':
            alert('correct');
            points = points + 1;
            alert('your grade is ' + points);

            //console.log( ' wow thats true ');

            break;
        case 'Y':
            alert('correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ');

            break;
        case 'NO':
            alert(' incorrect');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ');

            break;
        case 'N':
            alert('incorrect');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ');

            break;

        default:
            alert('wrong answer ');
            alert('false , your grade is ' + points)

            //console.log( ' wrong  ')

            break;
    }


}

sky();

function validateTwo() {
    var two = prompt(' messi is  better than ronaldo ? ');
    while (two === '') {
        two = prompt(' messi is  bitter than ronaldo ? ');
    }
    return two;




}


function messi() {
    // var messi = prompt(' messi is  bitter than ronaldo ? ');
    var messi = validateTwo();
    var messi = messi.toUpperCase();

    switch (messi) {
        case 'YES':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ');

            break;
        case 'Y':
            alert('correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ');

            break;
        case 'NO':
            alert('incorrect');
            alert('false , your grade is ' + points)

            break;
        case 'N':
            alert(' incorrect');
            alert('false , your grade is ' + points)

            break;

        default:
            alert(' wrong answer ');
            alert('false , your grade is ' + points)

            //console.log( ' wrong  ');

            break;
    }
    //console.log( ' wow thats true ');
}
messi();

function validateThree() {
    var three = prompt(' Allah is the only god ? ');
    while (three === '') {
        three = prompt(' Allah is the only god ? ');

    }
    return three;



}

function god() {
    // var god = prompt(' Allah is the only god ? ');
    var god = validateThree();
    var god = god.toUpperCase();


    switch (god) {
        case 'YES':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'Y':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'NO':
            alert(' incorrect answer');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ')

            break;
        case 'N':
            alert(' incorrect answer');
            //console.log( ' incorrect  ')

            break;

        default:
            alert(' wrong answer ');
            alert('false , your grade is ' + points)

            //console.log( ' wrong  ')

            break;
    }
}
god();

function validateFour() {
    var four = prompt(' are you beautiful ? ');
    while (four === "") {
        four = prompt(' are you beautiful ? ');
    }
    return four;


}

function cute() {
    //var cute = prompt(' are you beautiful ? ');
    var cute = validateFour();
    var cute = cute.toUpperCase();

    switch (cute) {
        case 'YES':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'Y':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'NO':
            alert(' incorrect answer');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ')

            break;
        case 'N':
            alert(' incorrect answer');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ')

            break;

        default:
            alert(' wrong answer ');
            alert('false , your grade is ' + points)

            //console.log( ' wrong  ')

            break;
    }
}
cute();

function ValidateSix() {
    var six = prompt(' do you love food ? ');
    while (six === "") {
        six = prompt(' do you love food ? ');

    }
    return six;


}

function food() {
    // var food = prompt(' do you love food ? ');
    var food = ValidateSix();
    var food = food.toUpperCase();
    // while (!food){ food=prompt('please input yes or no !')}

    switch (food) {
        case 'YES':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'Y':
            alert(' correct');
            points = points + 1;
            alert('your grade is ' + points);
            //console.log( ' wow thats true ')

            break;
        case 'NO':
            alert(' incorrect answer');
            alert('false , your grade is ' + points)

            //console.log( ' incorrect  ')

            break;
        case 'N':
            alert(' incorrect answer');
            //console.log( ' incorrect  ')

            break;

        default:
            alert(' wrong answer ');
            alert('false , your grade is ' + points)

            //console.log( ' wrong  ')


            break;
    }
}
food();
function validateNumbe() {
    var num = prompt(' I want you to guess what  my favorite number is from 1-5  ? ');
    while (num==='' || isNaN(num)){
        num = prompt('please put a "NUmBER" from 1-5 that u guess is my favorite number ? ')
    }
    return num;



}


function number() {
    //var number = prompt(' I want you to guess what  my favorite number is from 1-5  ? ');
    number = validateNumbe();
    for (var i = 1; i <= 3; i++) {

        if (number < 3) {
            alert("too low");
            alert('false , your grade is ' + points)

            number = prompt(' I want you to guess what  my favorite number is from 1-5 ok ? ');

        } else if (number > 3) {
            alert("too high");
            alert('false , your grade is ' + points)

            number = prompt(' I want you to guess what  my favorite number is from 1-5 ok ? ');

        }
        if (number == 3) {
            alert('Correct');
            points = points + 1;
            alert('your grade is ' + points);
            i = 10
            
        }


    }
    alert('this is my favorite number "3" ')


}
number();

function governorate() {
    var governorate = ["amman", "tafilah", "mafraq", "karak", "irbid", "jarash", "salt", "zarqa", "maan", "aqaba", "madaba", "ajloun"]
    var city = prompt('give me a governorate that is in jordan? ')

    for (var counter = 1; counter <= 6; counter++) {
        if (city == governorate[0]) {
            alert('correct');
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;
        } else if (city == governorate[1]) {
            alert('correct')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[2]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[3]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[4]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[5]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[6]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[7]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[8]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[9]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[10]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[11]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[12]) {
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else {

            city = prompt('Wrong answer ! keep trying')
            alert = ('false , your grade is ' + points)
        }

    }

}
governorate();

alert('these are all the governorate of jordan "Amman" , "Tafilah" , "Mafraq" , "Karak" , "irbid" , "Jarash" ,"Salt" , "Zarqa" ,"Maan" , "Aqaba" ,"Madaba" , "Ajloun" ')
