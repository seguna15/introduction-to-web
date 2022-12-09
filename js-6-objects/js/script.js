// JavaScript Objects
const result = document.getElementById("result");
const about = document.getElementById('about');
//Object Literal

const person = {
    name: 'Adisa Oluwasegun',
    nickname: 'Cypher',
    employer: 'Skritpapod',
    jobRole : 'Founder/Tutor',
    nationality: 'Nigerian',
    favouriteClubs : ['AC Milan', 'LFC', 'Real Madrid'],
    displayDetails(){
        return `My name is ${this.name}, sometimes, people call me ${this.nickname}. I work at ${this.employer} as a ${this.jobRole}. I am ${this.nationality}`;
    },
    set details(detail){
        const parts = detail.split(',');
        this.name = parts[0],
        this.nickname = parts[1],
        this.employer = parts[2],
        this.jobRole  =parts[3],
        this.nationality = parts[4]
    }
};

//getting properties of an object 

// result.innerHTML = `<li>${person.name}</li>`;

//setting properties of an object
//person.name = 'Adisa Oluwasegun Qasim';

//result.innerHTML = `<li>${person.name}</li>`; 

for (const [key, value] of Object.entries(person)) {
    result.innerHTML += `<li>${key}: ${value}</li>`;
}
 
about.innerText = person.displayDetails();

person.details ='Alex Ferguson, Fergie, Manchester United, Retired Manager, Scottish';


about.innerText = person.displayDetails();

//Using spread operator
const num = {a:1, b: 2, c:3, d:4, e:5};
const num2 = {x: 24, y: 25, z: 26};

const newObj = {...num ,...num2};

console.table(newObj);

const {a,b} = newObj;
console.log(a);


