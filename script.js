// Standard array
// Hvordan man oppretter et tomt array
const foodStores = [];

//Hvordan man legger til et item i et array
foodStores[0] = 'Rema';

// Hvordan man erstatter et item i et array
foodStores[0] = 'Kiwi';

// Hvordan man oppretter et array med string-verdier
const fruits = ['Apple', 'Orange', 'Peach', 'Pear'];

// Hvordan man oppretter et array med int-verdier (rene tall)
const numbers = [1, 2, 3, 4, 5, 6];

// Hvordan man henter ut kun et item fra et array. 0 er første item.
console.log(fruits[0]);

// Hvordan man henter ut lengden på et array
console.log(fruits[fruits.length]);

// Hvordan man henter ut siste item fra et array
console.log(fruits[fruits.length - 1]);

// Hvordan man sjekker data typen
console.log(typeof fruits);

// Array med objekter
// Hvordan man oppretter et array med objekter som items
const people = [
  { firstName: 'John', lastName: 'Doe', age: 23 },
  { firstName: 'Jane', lastName: 'Donny', age: 44 },
  { firstName: 'Joe', lastName: 'Smith', age: 62 },
];

// Hvordan man henter ut objekter i fra et array
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);

// Hvordan man henter ut kun property av et objekt fra et array
console.log(people[0].firstName);

// Objekt med arrays
// Hvordan man oppretter et objekt med array som property verdi
const person = {
  name: 'Dina',
  age: 44,
  hobbies: ['Volleyball', 'Knitting', 'Cooking', 'Travelling'],
  height: 166,
};

// Hvordan man henter ut property av et objekt
console.log(person.name);

// Hvordan man henter ut et item fra en array property
console.log(person.hobbies[0]);
