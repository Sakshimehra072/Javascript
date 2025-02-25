/*  JavaScript provides a Number type and a Math object to perform numerical computations.
 JavaScript handles numbers as floating-point (64-bit IEEE 754 format), meaning there is no separate integer type. 
 It supports various operations like arithmetic calculations, rounding, random number generation, and more.
*/

const score = 400
console.log(score)  // 400
console.log(typeof score)  // number

const points =  new Number(100)
console.log(points)  // [Number: 100]
console.log(typeof points) // object

// Convertion to string 

console.log(points.toString().length)  // 100 ---> number to string, 3 ---> length
console.log(points.toFixed(2)) // 100.00 --->nnumber to float(.00 at last)

/* toPrecision(n) method formats a number to n significant digits, meaning it controls the total number of digits
 (before and after the decimal point) while rounding the result if necessary. */

let num = 123.656
console.log(num.toPrecision(2));  // "1.2e+2" (scientific notation) [ means we need only 2 significant digits.]
console.log(num.toPrecision(3)); // round off value 123.656 --> 124
console.log(num.toPrecision(4));  // "123.7"  (rounded to 4 digits)
console.log(num.toPrecision(6));  // "123.656" (no change)


// toLocalStirng

const hundreds = 1000000
console.log(hundreds.toLocaleString())  // 10,00,000 (according to US standards)
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 (according to Indian standards)
/*
📌 Math in JavaScript
JavaScript provides the built-in Math object, which includes various mathematical functions, constants,
and methods for performing calculations. 
*/

console.log(Math)  // object [Math] {}
console.log(Math.PI)  // 3.141592653589793
console.log(Math.E)   // 2.718281828459045 (Eulars Number)
console.log(Math.SQRT2) // 1.4142135623730951
console.log(Math.min(4,7,9,3,1,8)) // 1
console.log(Math.max(4,7,9,3,1,8)) // 9


/*-----------Math.random()------------------

Math.random() in JavaScript always generates a random number between 0 (inclusive) and 1 (exclusive).
If you want a random number between 0 and 10, you can multiply the result by 10*/
console.log(Math.random()) // generates random number
console.log(Math.random()*10)
// To avoid 0 (eg: 0.001 * 10 into still 0) we have to add 1 [in this case min value is 1]
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)  //To round of the number into smaller value


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+min) // + min to get number greater than minimum number
