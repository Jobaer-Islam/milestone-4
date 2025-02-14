const person = {
    name: 'badar uddin',
    age : 25, 
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

console.log(person);

// Dot notation - ডট দিয়ে property access করা

console.log(person.profession);
const income = person.salary;
console.log(income);

// Bracket notation - bracket দিয়ে access করা
console.log(person['age']);
const boyos = person['name']
console.log(boyos);

// error
// console.log(person.'fav places')
console.log(person['fav places']);




