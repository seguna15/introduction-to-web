/*
*Control FLow 
** 1. If else
** 2. If elseif
** 3. Nested if statement
** 4. Switch
*/

//IF ELSE
/* let username = prompt('Enter username');
if(username !== ''){
    alert(`Welcome ${username}`);
}else{
    alert('username cannot be empty');
} */

//ELSE IF 
/* let gender = prompt('Enter your gender').toLowerCase();

if(gender == 'male' ){
    alert('How far my guy!');
} 
else if ( gender == 'female') {
    alert('Hey what\'s up');
}
else{
    alert('I no know how you be o!');
} */

/* //Nested IF 

let username = prompt('Enter username');

if(username === 'cypher'){
    let password = prompt('Enter 3 digit pin');
    if( password === '123'){
        alert(`Username and Password Correct`);
    }else{
        alert('pin not correct');
    }
}else{
    alert('Username not correct');
} */

//Switch statement
let staffRole = prompt('Enter one of the following CEO, Manager, Supervisor, Clerk').toLowerCase();
switch (staffRole) {
    case 'ceo':  
        alert('Salary is $60,000');
        break;
    case 'manager':
        alert('Salary is $40,000');
        break;
    case 'supervisor':
        alert('Salary is $30,000');
        break;
    case 'clerk':
        alert('Salary is $25,000');
        break;
    default:
        alert('We do not have such a role in our company');
}
//
/*
*Iteration
** 1. For Loop
** 2. Do While Loop
** 3. While Loop
** 4. For in Loop
*/




