//Operators in javascript

/* Assignment Operator*/
// let laptopName = "DELL";

/* Arithmetic Operator */
// let num1 = 15;
// let num2 = 08;
// let sum = num1 + num2;
// console.log(sum);

/*  operator precedence in js*/
// let operate = 1 + (10 - 1);
// console.log(operate);

// console.log(10*20);
// console.log(10/20);

//console.log(4** 3);        //3 power 3 -> (3*3*3)

/* Implicit and Explicit*/
//   == & ===
// ==   ->  (changes the data type and equivalates)
// ===  ->  (doesn't change the data type and equivalates & it checks the data  type)

/* AND Operator */
// console.log(1 == 1 && 1 == 1);
// console.log(2==2 && 3==2);
// console.log(true == true);

/* OR Operator */
// console.log('test' === 'test' || 1 == 2);
//        ( ||   -> type operator     )
// console.log(true || false);

/* NOT Operator */
// console.log(1 != 2);
// console.log(true != true);
// console.log(1 !=2 && 100 != 50);

/* Comparison Operator */
// console.log(100< 500);
// console.log(100<=100);
// console.log(200>= 250);

/* Conditional Operator */
// if(false)
// {
//     console.log("It is cold");
// }
// else if (true)
// {
//     console.log('It is not cold');
// }
// function returns value but statements doesn't
 
// let a,b,c;
// a = 2;
// b = 3;
// c = 1;
// console.log((a>b)? a:c);        //ternary operator

/*
    if(condition)
    {
        statement
    }
*/

 //let userCount = 100;

// if(userCount === 99 )
// {
//     console.log('The users count = ' + userCount);
// }

// let online = true;
// if(userCount === 99 && online)
// {
  
//     console.log('Everyone is present');
// }
// else if(userCount === 100 && online )
// {
//     console.log('I see everyone is online');
// } 
// else
// {
//     console.log('Everyone is absent');
// }

/* prompt() */
let phone = prompt('Which phone do you prefer ?');
if(phone === 'samsung')
{
    alert('Samsung is android');
}
else if(phone === 'iphone')
{
    alert('iphone is IOS ');
}
else
{
    alert('NO phone');
    alert('!!! Get one !!!');
}