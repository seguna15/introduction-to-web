/**
 ** VARIABLE DECLARATION WITH VAR AND LET
 ** A VARIABLE is a value that can change over the course of our programme. 
 */
//Differences between VAR and CONST
//Hoisitng: Varyou can access a variable before it is declared, Let cannot be accessed before declaration.

//console.log(b); cannot access be before initialization 
console.log(greet); // undefined

let b = 10;
var greet = "Hello";

//Scope: Var has global scope, while let as block scope;

let name = 'David';
var email = "admin@test.com";
if(2 < 10){
    let name = 'Paul';
    console.log(name); // block scope
}

if(2 < 10){
    var email = "sub_admin@test.com";
}
console.log(email); //sub_admin@test.com because var has a global scope
console.log(name); //david because it does not have access to the block scoped paul

//Redundant Declaration: var allows redeclaration of variable let does not allow it

var email = "Alex@gmail.com"; // no issue despite having email declared on line 12 and 19;
//let name = "Isiah" // error because you are trying to redeclare an already declared variable;

//CONST: A constant value i.e it would not change over the course of your programme

//Everything that works for let works for const but you cannot reassign a value to it
const VAT = 0.75;
//VAT = 0.80; // Error you cannot reassign value to a constant

//several declaration
let num1, num2, num3;

//several initialization on the same line
let num4 = 10, num5 = 11, num6 = 12;
