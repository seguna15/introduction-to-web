//Number: either whole number or integer values;
let num1 = 12;
let num2 = 13;
console.log(num1 + num2);
let float1 = 3.45;
let float2  = 10.20;

console.log(typeof float1);

//String: sequence of characters
let name = "Cypher";
let role = 'Coding tutor';
let stringNum = '123';

//console.log(name + " is a " + role);
console.log(`${name} is a ${role}`);


//Boolean: true or false values as a result of comparison expressions
let registrationStatus = true;
let subscriptionStatus = false;
let testVariable = 6 < 4;

console.log(testVariable);

//Null: its a value but we do not know what it is yet.
let username = 'null';

let display_name = username ?? "New user"; 
console.log(display_name);


let auth_status = null;

if(10 > 5){
    auth_status = "logged in";
}

let authPromt = auth_status ?? "Kindly Login to view content";
 alert(authPromt); 


//Undefined: varible that exists but does not have a value yet
let undefineValue;
console.log( typeof undefineValue);

//Symbols: to create distinct values
let symbName = Symbol("Cypher");
let symbName2 = Symbol("Cypher")

console.log(symbName === symbName2);

const users = [
    {
        id: Symbol('123'),
        username: 'RaceTitan'
    },
    {
        id: Symbol('124'),
        username: 'LoneRacer'
    }
];

//explicit type conversion
console.log( typeof Number(stringNum));