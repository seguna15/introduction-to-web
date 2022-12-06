//Arithmetic + - * / %
//Assignment = += -=
//Unary operators ++ --
//Comparison > < >= <= == === != !==
//Logical Operators || &&
//Bitwise

/*
* ARITHMETIC OPERATORS 
*/
//addition
/* let a = Number(window.prompt('Enter the value of a'));
let b = Number(window.prompt('Enter the value of b'));
let sum = a + b;
window.alert(`Sum of a and b is: ${sum} `); */

//Subtraction
/* let sub1 = Number(prompt('Enter your first value.'));
let sub2 = Number(prompt('Enter your second value'));
let sub = sub1 - sub2;
alert(`${sub1} - ${sub2} = ${sub}`); */

//Multiplication
/* let mul1 = Number(prompt('Enter your first value.'));
let mul2 = Number(prompt('Enter your second value'));
let mul = mul1 * mul2;
alert(`${mul1} * ${mul2} = ${mul}`); */

//Division
/* let div1 = Number(prompt('Enter your first value.'));
let div2 = Number(prompt('Enter your second value'));
let div = div1 / div2;
alert(`${div1} / ${div2} = ${div}`); */

//Modulus
/* let mod1 = Number(prompt('Enter your first value.'));
let mod2 = Number(prompt('Enter your second value'));
let mod = mod1 % mod2;
alert(`${mod1} % ${mod2} = ${mod}`); */

/*
*Assignment Operator
*/
// =
/* let userName = prompt('Enter your username');
alert(`${userName}`); */
//+=
/* let num = 5;
num += Number(prompt('Add value to num')); // num = num + num;
alert(num); */

//-=
/* let num = 10;
num -= Number(prompt('Subtract value from num')); // num = num + num;
alert(num); */

/*
 * Unary Operator
 */
// a++ postincrement, ++a preincrement
/* let a  = 5;
let b = 5;
alert(`a: ${a++}`);// a is only increased after this line
alert(`a: ${a}`);
 
alert(`b: ${++b}`); // b is increased on this line
alert(`b: ${b}`); */

// a++ postdecrement, ++a predecrement
/* let c  = 5;
let d = 5;
alert(`c: ${c--}`);// c is decreased after this line
alert(`c: ${c}`); //4
 
alert(`d: ${--d}`); // b is increased on this line
alert(`d: ${d}`);  */

/*
 *Comparison Operator 
 */

/*  let comp1 = Number(prompt('Enter the first value you wish to compare'));
 
 let comp2 = Number(prompt('Enter the second value you wish to compare')); */
// >
//alert(`is first value ${comp1} greater than second value ${comp2}: ${comp1 > comp2}`);

// <
//alert(`is first value ${comp1} less than second value ${comp2}: ${comp1 < comp2}`);

//>=
//alert(`is first value ${comp1} greater than or equal second value ${comp2}: ${comp1 >= comp2}`);

// <=
//alert(`is first value ${comp1} less than or equal second value ${comp2}: ${comp1 <= comp2}`);

/**
 ** ASSIGNMENT: WORK WITH == equal to, === Strict equal to, != Not Equal To, !== Strict Not Equal to;
*/

/** 
** LOGICAL OPERATORS AND , OR
 */

let username = 'cypher';
let password = '123';

let checkUser = prompt('Enter username');
let checkPassword = prompt('Enter password');

//&&
/* if(checkUser === username && checkPassword === password){
    alert(`Welcome ${username}`);
}else{
    alert(`Password or Username not correct`);
}
 */

if (checkUser === username || checkPassword === password) {
  alert(`Welcome ${username}`);
} else {
  alert(`Password or Username not correct`);
}

