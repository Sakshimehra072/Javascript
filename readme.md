# 1. Introduction to JavaScript and Basic History of JS

JavaScript is a high-level, interpreted programming language used primarily for web development to create dynamic and interactive websites. It is often run in the browser to manipulate web page elements.
# Created by: JavaScript was created by Brendan Eich at Netscape Communications in 1995.
Original name: Initially called Mocha, then renamed to LiveScript, and finally to JavaScript.
ECMAScript Standard: JavaScript is based on the ECMAScript (ES) specification, which is maintained by ECMA International. ES6 (ES2015) introduced many important updates, including classes, modules, arrow functions, promises, etc.

# Q: Why Use JavaScript?
Interactive Websites: JavaScript enables dynamic interaction within the webpage, like responding to user events, changing the content without reloading, etc.
Client-side Processing: JavaScript executes in the user's browser, reducing server load and providing a faster user experience.
Wide Usage: It's supported by all modern browsers and works seamlessly across different platforms.
Full-stack Development: JavaScript can be used for both front-end (with frameworks like React, Angular) and back-end (with Node.js), allowing for a full-stack development experience.
Asynchronous Programming: JavaScript handles asynchronous tasks (e.g., API calls, user inputs) via mechanisms like Promises and async/await.
# Importance of JavaScript
Dominant Language for Web Development: JavaScript is essential for creating modern, feature-rich web applications.
Community & Ecosystem: A vast community of developers and a rich ecosystem of libraries and frameworks (e.g., React, Vue, Angular) provide powerful tools for developers.
Cross-Platform Development: JavaScript can be used to develop not only websites but also mobile applications (using React Native) and desktop applications (using Electron).
Non-blocking I/O: JavaScript can handle numerous simultaneous operations without blocking the main thread, improving performance and responsiveness.

# 2. let, const, and var
var: The original way to declare variables. Its scope is function-wide and can be re-assigned. However, it can lead to bugs due to its hoisting and function-scoped behavior.
let: Introduced in ES6, let is block-scoped and allows reassignment of values, unlike const. It's preferable to var as it avoids some issues related to variable scoping.
const: Also block-scoped, but the value cannot be reassigned after initialization. It’s used when the variable value should remain constant.
Example:

```javascript
var x = 10;
let y = 20;
const z = 30;

x = 15; // allowed
y = 25; // allowed
z = 35; // error: assignment to constant variable```

# 3. Data Types
JavaScript supports several types of data, categorized as primitive types and reference types.

# Primitive Data Types:
1. String: A sequence of characters, enclosed in single, double, or backticks.
2. Number: Represents both integers and floating-point numbers.
3. BigInt: Represents integers larger than the range of the Number type.
4. Boolean: Represents true or false.
5. undefined: Represents an uninitialized variable.
6. null: Represents a null or empty value.
7. Symbol (ES6): Represents a unique, immutable value.

# Non-Primitive (Reference) Data Types:
1. Object: Collections of key-value pairs (including arrays and functions).
2. Array: A type of object for storing ordered collections.
3.Function: A special object that can be invoked to perform actions.

# 4. String to Number Conversion

JavaScript provides multiple ways to convert strings to numbers:
parseInt(): Converts a string to an integer.
parseFloat(): Converts a string to a floating-point number.
Number(): Converts a string to a number, which can be either integer or floating-point.
Unary Plus (+): A shorthand to convert a string to a number.
Examples:

```javascript
let str = "123";
let num1 = parseInt(str);   // 123
let num2 = parseFloat(str); // 123
let num3 = Number(str);     // 123
let num4 = +str;            // 123
```

5. Comparison of Data Types in JavaScript (typeof Operator)

typeof Operator: Used to check the data type of a value.
Examples:

```javascript
Copy
typeof "Hello"      // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (this is a quirk of JavaScript)
typeof {}           // "object"
typeof []           // "object" (arrays are objects)
typeof function(){} // "function" ```

# 6. Operators in JavaScript
JavaScript includes several types of operators:

Arithmetic Operators: +, -, *, /, %, ++, --
Assignment Operators: =, +=, -=, *=, /=, %=
Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
Logical Operators: && (AND), || (OR), ! (NOT)
Bitwise Operators: &, |, ^, <<, >>, >>>
Ternary Operator: condition ? expr1 : expr2 (shorthand for if-else)
Nullish Coalescing Operator (??): Returns the right operand when the left is null or undefined.

# 7. Stack and Heap Memory in JavaScript
Stack Memory:

Used for storing primitive values and function calls.
It operates in a Last In, First Out (LIFO) manner.
Variables in the stack have a limited scope and are automatically cleared after execution.
Heap Memory:

Used for storing reference types (objects, arrays, functions).
Objects stored in the heap are dynamically allocated and can be accessed by reference.
Memory is managed through garbage collection, which periodically clears unused objects.
8. Strings in JavaScript
Strings in JavaScript are immutable, meaning once created, their values cannot be changed.
You can manipulate strings using methods like toUpperCase(), toLowerCase(), substring(), slice(), trim(), replace(), split(), etc.
Examples:

```javascript
Copy
let str = "Hello, world!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.slice(0, 5));   // "Hello"
console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"```