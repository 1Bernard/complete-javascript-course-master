/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";
console.log(myFirstJob);
console.log(myCurrentJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1990;


//Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Bernard";
const lastName = "Ansah";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);

x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

//Comparison operators
// We use comparison operators to produce boolean values
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);


//Data 1
const markMassData1 = 78;
const markHeightData1 = 1.69;
const johnMassData1 = 92;
const johnHeightData1 = 1.95;

const bmiMarkData1 = markMassData1 / markHeightData1 ** 2;
const bmiJohnData1 = johnMassData1 / johnHeightData1 ** 2;

const markHigherBMIData1 = bmiMarkData1 > bmiJohnData1

console.log(markHigherBMIData1)
//Data 2
const markMassData2 = 95;
const markHeightData2 = 1.88;
const johnMassData2 = 85;
const johnHeightData2 = 1.76;

const bmiMarkData2 = markMassData2 / markHeightData2 ** 2;
const bmiJohnData2 = johnMassData2 / johnHeightData2 ** 2;

const markHigherBMIData2 = bmiMarkData2 > bmiJohnData2

console.log(markHigherBMIData2)
*/

const firstName = 'Bernard';
const job = 'teacher';
const birthYear = 1996;
const year = 2024;

const bernard = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(bernard);

const bernardNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(bernardNew);