// Dog age calculation, which 8 years in a human's life equates to 45 years in a dog's life
const myAge = 11;
let earlyYears = 2;

// earlyYears = earlyYears * 10.5; (optional)
earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

// Add earlyYears and laterYears
myAgeInDogYears = earlyYears + laterYears;

let myName = 'Caesar'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years`);

/*
New edit recommended by Copilot
// Dog age calculation, which 8 years in a human's life equates to 45 years in a dog's life
const myAge = 11;
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

myAgeInDogYears = earlyYears + laterYears;

let myName = 'Caesar'.toLowerCase();

const message = `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years`;

// Display on webpage
document.getElementById('result').textContent = message;

// Also log to console for debugging
console.log(message);
*/
