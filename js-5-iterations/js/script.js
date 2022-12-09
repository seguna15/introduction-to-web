let result = document.querySelector(".result");
/** 
**FOR LOOP 

**basic structure
for («initialization»; «condition»; «post_iteration») {
«statements»
}
*/

/* for (let i =  1; i <= 10; i++){
   result.innerHTML += `<li>${i}</li>`;
} */

/* const fruits = ['Apple', 'Banana', 'Cashew'];
let fruitsLength = fruits.length;
 
for( let i = 0; i < fruitsLength; i++){
    result.innerHTML += `<li>${fruits[i]}</li>`; 
}  */


/** 
**WHILE LOOP 

**basic structure
while («condition») {
    «statements»
}
*/
/* let i = 0;
while (i < 10) {
   result.innerHTML += `<li>${i}</li>`;
   i++;
}  */


/* let jobRoles = ['CEO', "Manager", "Supervisor", "Clerk", "Janitor"];
let jobRolesLength = jobRoles.length;
let role = 0;
while(role < jobRolesLength){
    result.innerHTML += `<li>${jobRoles[role]}</li>`;
    role++;
}  */

/** 
** DO WHILE LOOP

    DO{
        <<statement>>
    }while(condition)
 */
/* let i = 1;
let condition = Number(prompt('Enter the number of times you want the loop to run'));
do {
    result.innerHTML += `<li>${i}</li>`;
    i++;
} while (i <= condition);
 */

/**
 ** FOR OF and FOR IN LOOPS
 ** for («iteration_variable» of «iterable») {
        «statements»
    } 
 */

const phoneArray = ['Samsung', 'Apple', 'Google Pixel', 'Xiaomi', 'Huawei', 'Motorolla'];

// Shows the values
/* for ( let phone of phoneArray){
     result.innerHTML += `<li>${phone}</li>`;
} */

//Exposes the index
// FOr in iterates
/* for ( let key in phoneArray){
     result.innerHTML += `<li>${phoneArray[key]}</li>`;
} */

//Break stops the iteration when the condition is met
/* for ( let phone of phoneArray){
    result.innerHTML += `<li>${phone}</li>`;
    if(phone == 'Xiaomi')
    {
        break;
    }
     
} */

for (let phone of phoneArray) {
 
  if (phone == "Xiaomi") {
    continue;
  }
   result.innerHTML += `<li>${phone}</li>`;
}