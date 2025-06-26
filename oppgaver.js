// Oppgave 1: Lag en array med norske byer som string
// Oppgave 2: Lag en array med 6 forskjellige tall på minst 3 siffre
// (Bonus) Oppgave 3: Lag en array med objekter
// (Bonus) Oppgave 4: Lag et objekt med en array

// Oppgave 1 løsning
const byer = ['Bergen', 'Voss', 'Oslo', 'Stavanger'];
console.log(byer);

// Oppgave 2 løsning
const ids = [156, 188, 194, 153, 177, 131];
console.log(ids);

// Oppgave 3
const pets = [
  { name: 'Fluffy', animal: 'Cat', color: 'black', age: 3, insured: true },
  { name: 'Ball', animal: 'Dog', color: 'white', age: 7, insured: true },
  { name: 'Biter', animal: 'Hamster', color: 'orange', age: 2, insured: false },
];

console.log(
  'Mitt dyr sitt navn: ' +
    pets[0].name +
    ' Type dyr: ' +
    pets[0].animal +
    ' Alder på dyret: ' +
    pets[0].age +
    ' år'
);

// Oppgave 4
const mom = {
  age: 44,
  name: 'Bertrud',
  gender: 'female',
  likesToCook: ['Lasagna', 'Pizza', 'Spaghetti', 'Chicken and rice'],
  hobbies: ['Cooking', 'Knitting', 'Reading', 'TV'],
};

let momFavouriteDish = mom.likesToCook[0];
console.log('My moms favorite dish is ' + momFavouriteDish);

console.log('My mom likes to cook ' + mom.likesToCook.length + ' dishes');

// Oppgave: Opprett først et tomt array. Deretter gi den "Pancake" som første index. Så oppdater første index til å heller være "Waffle". Pancake skal da erstattes med Waffle. Print ut begge i konsollen.
// Bonus oppgave: Legg til flere matretter, og print ut lengden på arrayet.

// Løsning
const mat = [];
console.log(mat);
mat[0] = 'Pancake';
console.log(mat);
mat[0] = 'Waffle';
console.log(mat);

// Løsning på bonus oppgave
mat[1] = 'Ice Cream';
mat[2] = 'Chicken';
mat[3] = 'Pizza';
console.log(mat);
console.log(mat.length);
