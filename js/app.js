'use strict'
var points = 0;


var name = prompt(' what is your name? ');
alert(' welocme ' + name + ' i wanna ask u 7 questions and u must answer with yes/no also y/n ');

function sky(){
    
var answer = prompt(' We have 7 skyes ? ')
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
        alert=('false , your grade is ' + points)

        //console.log( ' wrong  ')

        break;
}
}
sky();

function messi(){
var messi = prompt(' messi is  bitter than ronaldo ? ');
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

function god(){
var god = prompt(' Allah is the only god ? ');
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

function cute(){
var cute = prompt(' are you beautiful ? ');
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

function food(){
var food = prompt(' do you love food ? ');
var food = food.toUpperCase();
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


function number(){
var number = prompt(' I want you to guess what  my favorite number is from 1-5  ? ');
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
    if (number == 3){
        alert('Correct');
        points = points + 1;
        alert('your grade is ' + points);
        i = 10
        
}


    }
}
number();

function governorate(){
    var governorate = [ "amman" , "tafilah" , "mafraq" , "karak" , "irbid" , "jarash" ,"salt" , "zarqa" ,"maan" , "aqaba" ,"madaba" , "ajloun"]
    var city = prompt('give me a governorate that is in jordan? ')

    for (var counter = 1; counter <=6; counter++) {
        if (city == governorate[0]){
            alert('correct');
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;
        } else if (city == governorate[1]){
            alert('correct')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        } else if (city == governorate[2]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[3]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[4]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[5]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[6]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[7]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[8]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[9]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[10]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[11]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;

        }else if (city == governorate[12]){
            alert('coreect')
            points = points + 1;
            alert('your grade is ' + points);
            counter = counter + 9;
            
            }else{
                city = prompt('Wrong answer ! keep trying')
                alert=('false , your grade is ' + points)
            }

        }

    }
    governorate();

alert('these are all the governorate of jordan "Amman" , "Tafilah" , "Mafraq" , "Karak" , "irbid" , "Jarash" ,"Salt" , "Zarqa" ,"Maan" , "Aqaba" ,"Madaba" , "Ajloun" ')
