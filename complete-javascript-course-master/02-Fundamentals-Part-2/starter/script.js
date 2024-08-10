'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// function logger() {
//   console.log('My name is Bernard');
// }

// //calling, running, invoking
// logger();
// logger();
// logger();

// function foodProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = foodProcessor(2, 4);
// console.log(appleOrangeJuice);

//function declaration
// function calcAge1(birthYear) { 
//   return 2037 - birthYear; 
// }

// const age1 = calcAge1(1996);

// //function expression
// const calcAge2 = function (birthYear) { 
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1996);

// console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);