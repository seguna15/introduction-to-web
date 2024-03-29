//JS Functions
/* function identifier (arg1, arg2){
    statements
} */
const result = document.getElementById("result");
// ** Functions and Parameters
//sayHello("Idris", "INtern"); /* Hoisting Support in Javascript */
/* function sayHello(username, role) {
  alert(`Hi ${username}. I am a ${role}`);
} */

/* 
let username = prompt("Enter your username");
let role = prompt("Enter your role");
sayHello(username, role);  */

// ** Function Expression
/* let sum1 = function(a,b){
    return a * b;
};

result.innerText = sum(5,5); */

//Arrow Function
let sum = (a, b) => a * b;
result.innerText = sum(5, 5);
/* 
 Differences between  Function Syntax and Function  Expression;
 1) Function Syntax supports hoisting Function expression does not
 */

 window.username = 'David';
 window.role = 'Intern';
 const userObj = {
    username: 'Cypher',
    role: 'Tutor',
    displayUser: function() {
        console.log(`Username: ${this.username}, Role: ${this.role}`);
    },
    displayUserArrowFunc: () => {
        console.log(`Username: ${this.username}, Role: ${this.role}`);
    }  
}

 userObj.displayUser();
 userObj.displayUserArrowFunc();