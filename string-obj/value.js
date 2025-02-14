const person = {
    name: 'badar uddin',
    age : 25, 
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 3000;
person['age'] = 28
console.log(person);

const keyname = 'profession';
console.log(person[keyname]);
