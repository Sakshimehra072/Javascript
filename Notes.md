# 👋 1. Introduction to JavaScript
JavaScript is a high-level, interpreted programming language used primarily for web development to create dynamic and interactive websites. It is often run in the browser to manipulate web page elements.
javascript is synchronous single threaded language.
# Created by: JavaScript was created by Brendan Eich at Netscape Communications in 1995.
Original name: Initially called Mocha, then renamed to LiveScript, and finally to JavaScript.
ECMAScript Standard: JavaScript is based on the ECMAScript (ES) specification, which is maintained by ECMA International. ES6 (ES2015) introduced many important updates, including classes, modules, arrow functions, promises, etc.

#  ❓Why Use JavaScript?
Interactive Websites: JavaScript enables dynamic interaction within the webpage, like responding to user events, changing the content without reloading, etc.

Client-side Processing: JavaScript executes in the user's browser, reducing server load and providing a faster user experience.

Wide Usage: It's supported by all modern browsers and works seamlessly across different platforms.

Full-stack Development: JavaScript can be used for both front-end (with frameworks like React, Angular) and back-end (with Node.js), allowing for a full-stack development experience.

Asynchronous Programming: JavaScript handles asynchronous tasks (e.g., API calls, user inputs) via mechanisms like Promises and async/await.
# 🌟Types of Execution :
1. Synchronous 
2. Ashynchronus
# Synchronous Language
- Tasks performed sequenslly, meaning one task must complete before the starting of next.
- Execution blocks until the current tasks finish.
- eg: waiting in queue.

# Asynchronous
- Task can run independently
- Another task can start before the completion of first task.
- Non-blocking execution, means task runs parallely.
- API call, Callback function(setTimeout).

# Execution Context
- Execution context is an environment in which a script is executed.
- Evrything in javasript happens inside the execution context.
 # key concept of Execution Context
 1. Creatoin Phase
 2. Execution Phase

# ❤️Importance of JavaScript
Dominant Language for Web Development: JavaScript is essential for creating modern, feature-rich web applications.
Community & Ecosystem: A vast community of developers and a rich ecosystem of libraries and frameworks (e.g., React, Vue, Angular) provide powerful tools for developers.
Cross-Platform Development: JavaScript can be used to develop not only websites but also mobile applications (using React Native) and desktop applications (using Electron).
Non-blocking I/O: JavaScript can handle numerous simultaneous operations without blocking the main thread, improving performance and responsiveness.

# 2. let, const, and var
- var: The original way to declare variables. Its scope is function-wide and can be re-assigned. However, it can lead to bugs due to its hoisting and function-scoped behavior.
- let: Introduced in ES6, let is block-scoped and allows reassignment of values, unlike const. It's preferable to var as it avoids some issues related to variable scoping.
- const: Also block-scoped, but the value cannot be reassigned after initialization. It's used when the variable value should remain constant.
Example:

```javascript
var x = 10;
let y = 20;
const z = 30;

x = 15; // allowed
y = 25; // allowed
z = 35; // error: assignment to constant variable
```

# 📊3. Data Types
JavaScript supports several types of data, categorized as primitive types and reference types.

## Primitive Data Types:
1. String: A sequence of characters, enclosed in single, double, or backticks.
2. Number: Represents both integers and floating-point numbers.
3. BigInt: Represents integers larger than the range of the Number type.
4. Boolean: Represents true or false.
5. undefined: Represents an uninitialized variable.
6. null: Represents a null or empty value.
7. Symbol (ES6): Represents a unique, immutable value.

## Non-Primitive (Reference) Data Types:
1. Object: Collections of key-value pairs (including arrays and functions).
2. Array: A type of object for storing ordered collections.
3. Function: A special object that can be invoked to perform actions.

## 4 (typeof Operator) Comparison of Data Types in JavaScript 

typeof Operator: Used to check the data type of a value.
Examples:

```javascript
typeof "Hello"      // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (this is a quirk ofJavaScript)
typeof {}           // "object"
typeof []           // "object" (arrays are objects)
typeof function(){} // "function" 
```

# 5. Operators in JavaScript
JavaScript includes several types of operators:

- Arithmetic Operators: +, -, *, /, %, ++, --
- Assignment Operators: =, +=, -=, *=, /=, %=``
- Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
- Logical Operators: && (AND), || (OR), ! (NOT)
- Bitwise Operators: &, |, ^, <<, >>, >>>
- Ternary Operator: condition ? expr1 : expr2 (shorthand for if-else)
- Nullish Coalescing Operator (??): Returns the right operand when the left is null or undefined.

# 6. 🧠Stack and Heap Memory in JavaScript
## Stack Memory:

- Used for: storing primitive values (e.g., Number, String, Boolean, null, undefined, Symbol, BigInt) and function calls.
- Memory allocation: Automatically managed (Last-In-First-Out).
- Fast access: Since the stack operates on a fixed-size structure, it is much faster.
- Scope: Local execution context (Function execution creates a new stack frame).
- It operates in a Last In, First Out (LIFO) manner.
- Variables in the stack have a limited scope and are automatically cleared after execution.
```javascript
let x = 10;
let y = x;  // y gets a copy of x

x = 20;  // Changing x does not affect y
console.log(x); // 20
console.log(y); // 10
```
Since x is a primitive, y gets a copy of x, and modifying x does not affect y.

## Heap Memory:

- Used for storing reference types (objects, arrays, functions).
- Objects stored in the heap are dynamically allocated and can be accessed by reference.
- Memory is managed through garbage collection, which periodically clears unused objects.
- Used for: Storing objects, arrays, and functions.
- Memory allocation: Dynamically allocated.
- Slower access: Since it involves references and dynamic allocation.
- Scope: Global and accessible as long as there’s a reference to it.

```javascript
let obj1 = { name: "Sakshi" };
let obj2 = obj1; // obj2 gets a reference to obj1

obj1.name = "Mehra"; // Changing obj1 also affects obj2
console.log(obj1.name); // "Mehra"
console.log(obj2.name); // "Mehra"
```
obj2 does not get a copy but a reference to the same object in the heap.
Changes to obj1 reflect in obj2 as well.
## 🔹 Stack vs. Heap Memory in JavaScript

| Feature        | Stack Memory                         | Heap Memory                      |
|---------------|-------------------------------------|---------------------------------|
| **Definition** | Stores **primitive** values & function call execution | Stores **objects** and dynamically allocated memory |
| **Speed**      | **Faster** (static memory allocation) | **Slower** (dynamic memory allocation) |
| **Memory Size** | Small & fixed size | Large & flexible |
| **Storage Type** | Stores local variables, function calls, and execution context | Stores objects, arrays, and reference types |
| **Access** | Direct access (LIFO - Last In, First Out) | Indirect access (via references) |
| **Scope** | Limited to function or block scope | Accessible globally (until garbage collection) |
| **Garbage Collection** | Not needed (memory automatically freed when function ends) | Required (GC removes unused objects) |
| **Example** | `let x = 10;` (stored in stack) | `let obj = { name: "Sakshi" };` (stored in heap) |

### **📌 Example Code**
```js
// Stack memory example
function test() {
    let a = 10; // Stored in stack
    let b = 20; // Stored in stack
}
test(); // Memory is freed after execution

// Heap memory example
let obj = { name: "Sakshi" }; // Stored in heap
```

# 7. ➿STRING in JavaScript

Strings are used to store and manipulate text. In JavaScript, strings are a sequence of characters enclosed in quotes. 
We can use:
Single quotes (' ')
Double quotes (" ")
Template literals (` `)
Declaring Strings

```javascript

// Using single quotes
let singleQuoteString = 'Hello, World!';

// Using double quotes
let doubleQuoteString = "JavaScript is fun!";

// Using template literals
let templateLiteralString = `Learning JavaScript strings!`;
```
Template literals, introduced in ES6 (ECMAScript 2015), provide an easier and more flexible way to work with strings in JavaScript. They use backticks (``) instead of quotes ("" or '') and allow features like multiline strings, string interpolation, and embedded expressions.
String Properties and Methods.

# Primitive String vs. Object String in JavaScript
In JavaScript, strings can be created in two ways:

- Primitive Strings (Recommended)
- Object Strings (Created using new String())
Let’s compare them in detail:

# 1️⃣ Primitive String 

✅ Definition
A primitive string is a basic data type in JavaScript. It is immutable and lightweight.

```javascript
const str1 = "Hello, Sakshi";  // Primitive string
console.log(typeof str1); // "string"
```
✅ Behavior

- Stored as a primitive value.
- Fast and memory-efficient.
- Automatically converted to an object when needed.
# 2️⃣ Object String (Created Using new String())
Definition :

Using new String() creates a String object instead of a primitive string.
```javascript
const str2 = new String("Hello, Sakshi");  // Object String
console.log(typeof str2); // "object"
```
Behavior
- Stored as an object, not a primitive.
- Takes more memory than primitive strings.
- Not recommended unless you specifically need an object.

### 🆚 Key Differences Between Primitive and Object Strings
Feature	Primitive String ("...")	Object String (new String("..."))
Type	string	object
Storage	Primitive value	Wrapper object
Performance	Fast & efficient	Slower, uses more memory
Mutability	Immutable	String content is immutable, but properties can be added
Comparison (===)	Compares values	Compares object references
Use Case	Preferred for all cases	Avoid unless necessary

## 🔹 Key Differences: Primitive String vs. Object String

| Feature           | Primitive String (`"..."`) | Object String (`new String("...")`) |
|------------------|---------------------------|----------------------------------|
| **Type**        | `string`                    | `object`                        |
| **Storage**     | Stored as a primitive value | Stored as a wrapper object      |
| **Performance** | Fast & memory-efficient     | Slower, uses more memory        |
| **Mutability**  | Immutable                   | Immutable (but properties can be added) |
| **Comparison (`===`)** | Compares values | Compares object references |
| **Use Case**    | Preferred for all cases    | Avoid unless necessary          |


Example: Type Difference
```javascript
const str1 = "Sakshi"; // Primitive
const str2 = new String("Sakshi"); // Object

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"
```

Example: Comparison Difference
```javascript

const str1 = "Sakshi";
const str2 = new String("Sakshi");

console.log(str1 === str2); // false (Primitive vs. Object)
console.log(str1 == str2);  // true (Type coercion)
```
=== checks for strict equality, so it returns false.
== converts the object string to a primitive and compares values, so it returns true.
Example: Adding Properties
```javascript
const objStr = new String("Hello");

objStr.customProperty = "I am an object";
console.log(objStr.customProperty); // "I am an object"

const primStr = "Hello";
primStr.customProperty = "I am a primitive";
console.log(primStr.customProperty); // undefined (Primitive strings don't hold properties)
```
Object strings can have properties, but primitive strings cannot.
### 🛑 Why Avoid new String()?
- Extra memory usage (since it creates an object instead of a simple string).
- Unexpected behavior in comparisons.
- JavaScript automatically converts primitive strings into objects when needed.
### ✅ Best Practice: 
Always use primitive strings ("...") unless you specifically need a String object.

Conclusion:

- Use primitive strings ("Hello") in all cases.
- Avoid object strings (new String("Hello")) unless necessary.
- JavaScript automatically handles string conversion when required.

# 📌 Properties of Strings in JavaScript  

In JavaScript, strings are **immutable** and have several built-in properties that help manipulate and analyze them.

## 🔹 Important String Properties

| **Property**   | **Description** | **Example** |
|--------------|----------------|-------------|
| `length` | Returns the number of characters in a string | `"Sakshi".length // 6` |
| `constructor` | Returns the function that created the string’s prototype | `console.log("Sakshi".constructor); // [Function: String]` |
| `prototype` | Allows you to add methods to all string objects | `String.prototype.customMethod = function() { return "Hello!"; };` |

## 🔹 Example Code

```js
const myStr = "Hello, Sakshi!";
console.log(myStr.length);        // Output: 14
console.log(myStr.constructor);   // Output: [Function: String]
console.log(typeof myStr);        // Output: "string"
```

#  🗒️Common String Methods

# JavaScript String Methods

JavaScript provides several built-in methods to manipulate and analyze strings. Below is a list of commonly used string methods.

## 📌 String Manipulation Methods

| **Method** | **Description** | **Example** | **Output** |
|-----------|---------------|------------|-----------|
| `length` | Returns the number of characters in a string | `"Sakshi".length` | `6` |
| `toUpperCase()` | Converts the string to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | Converts the string to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `trim()` | Removes whitespace from both ends of a string | `"  hello  ".trim()` | `"hello"` |
| `slice(start, end)` | Extracts a portion of the string | `"JavaScript".slice(0,4)` | `"Java"` |
| `substring(start, end)` | Similar to `slice()`, but does not support negative indices | `"JavaScript".substring(0,4)` | `"Java"` |
| `substr(start, length)` | Extracts a substring based on start index and length | `"JavaScript".substr(4,6)` | `"Script"` |
| `replace(search, replacement)` | Replaces part of a string with another | `"Hello World".replace("World", "JS")` | `"Hello JS"` |
| `replaceAll(search, replacement)` | Replaces all occurrences in a string | `"aabb".replaceAll("a", "z")` | `"zzbb"` |
| `concat()` | Joins two or more strings | `"Hello".concat(" ", "World")` | `"Hello World"` |
| `split(separator)` | Splits a string into an array | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `includes(substring)` | Checks if a string contains another string | `"hello".includes("he")` | `true` |
| `indexOf(substring)` | Returns the first index of a substring | `"hello".indexOf("l")` | `2` |
| `lastIndexOf(substring)` | Returns the last index of a substring | `"hello".lastIndexOf("l")` | `3` |
| `startsWith(substring)` | Checks if a string starts with a substring | `"JavaScript".startsWith("Java")` | `true` |
| `endsWith(substring)` | Checks if a string ends with a substring | `"JavaScript".endsWith("Script")` | `true` |
| `charAt(index)` | Returns the character at a specific index | `"hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns the Unicode of the character at a specific index | `"A".charCodeAt(0)` | `65` |
| `padStart(targetLength, padString)` | Pads the start of a string with another string | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(targetLength, padString)` | Pads the end of a string with another string | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeats the string a specified number of times | `"Hi ".repeat(3)` | `"Hi Hi Hi "` |

## 🔹 Example Usage

```js
let str = "  JavaScript is awesome!  ";

console.log(str.length);                // 25
console.log(str.toUpperCase());         // "  JAVASCRIPT IS AWESOME!  "
console.log(str.trim());                // "JavaScript is awesome!"
console.log(str.includes("Java"));      // true
console.log(str.slice(2, 12));          // "JavaScript"
console.log(str.replace("awesome", "powerful"));  // "  JavaScript is powerful!  "
console.log(str.split(" "));            // ["", "", "JavaScript", "is", "awesome!", "", ""]

```
Point to Remember 
- Strings in JavaScript are versatile and come with a rich set of properties and methods. They allow you to perform tasks like searching, modifying, and formatting text easily. Let me know if you want help with specific string operations! 😊

IN CONSOLE :

![alt text]({8D7786CA-568E-434A-94E6-EF6C05A809EB}.png)
These are some protypes of String in js

# 8. JavaScript Numbers and Math

### JavaScript provides a Number type and a Math object to perform numerical computations. JavaScript handles numbers as floating-point (64-bit IEEE 754 format), meaning there is no separate integer type. It supports various operations like arithmetic calculations, rounding, random number generation, and more.

👉🏼 For eg:
- Numbers
```js
const score = 400
console.log(score)  // 400
console.log(typeof score)  // number

const points =  new Number(100)
console.log(points)  // [Number: 100]
console.log(typeof points) // object
```
- Math
```js
console.log(Math)  // object [Math] {}
console.log(Math.PI)  // 3.141592653589793
console.log(Math.E)   // 2.718281828459045
console.log(Math.SQRT2) // 1.4142135623730951 
```

JavaScript provides various methods and properties to work with numbers and perform mathematical operations.

## 📌 JavaScript Number Properties

| **Property** | **Description** | **Example** |
|-------------|---------------|------------|
| `Number.MAX_VALUE` | The largest possible number in JS | `1.7976931348623157e+308` |
| `Number.MIN_VALUE` | The smallest possible number in JS | `5e-324` |
| `Number.POSITIVE_INFINITY` | Represents infinity | `Infinity` |
| `Number.NEGATIVE_INFINITY` | Represents negative infinity | `-Infinity` |
| `Number.NaN` | Represents Not-a-Number | `NaN` |

---

## 📌 JavaScript Number Methods

| **Method** | **Description** | **Example** | **Output** |
|-----------|---------------|------------|-----------|
| `toFixed(n)` | Rounds a number to `n` decimal places | `(3.14159).toFixed(2)` | `"3.14"` |
| `toPrecision(n)` | Formats a number to `n` significant digits | `(3.14159).toPrecision(3)` | `"3.14"` |
| `parseInt(string)` | Converts a string to an integer | `parseInt("42")` | `42` |
| `parseFloat(string)` | Converts a string to a floating-point number | `parseFloat("3.14")` | `3.14` |
| `isNaN(value)` | Checks if a value is `NaN` | `isNaN("hello")` | `true` |
| `isFinite(value)` | Checks if a value is a finite number | `isFinite(10/0)` | `false` |

---

## 📌 JavaScript Math Object

The `Math` object provides various methods for mathematical calculations.

### 🔹 Common Math Properties

| **Property** | **Description** | **Example** |
|-------------|---------------|------------|
| `Math.PI` | The value of π (pi) | `3.141592653589793` |
| `Math.E` | Euler’s number (e) | `2.718281828459045` |
| `Math.SQRT2` | Square root of 2 | `1.4142135623730951` |

---

### 🔹 Common Math Methods

| **Method** | **Description** | **Example** | **Output** |
|-----------|---------------|------------|-----------|
| `Math.abs(x)` | Returns the absolute value of `x` | `Math.abs(-5)` | `5` |
| `Math.ceil(x)` | Rounds `x` up to the nearest integer | `Math.ceil(4.3)` | `5` |
| `Math.floor(x)` | Rounds `x` down to the nearest integer | `Math.floor(4.9)` | `4` |
| `Math.round(x)` | Rounds `x` to the nearest integer | `Math.round(4.5)` | `5` |
| `Math.trunc(x)` | Removes decimal part | `Math.trunc(4.9)` | `4` |
| `Math.pow(x, y)` | Returns `x` raised to the power `y` | `Math.pow(2, 3)` | `8` |
| `Math.sqrt(x)` | Returns square root of `x` | `Math.sqrt(16)` | `4` |
| `Math.min(a, b, ...)` | Returns the smallest value | `Math.min(5, 3, 9)` | `3` |
| `Math.max(a, b, ...)` | Returns the largest value | `Math.max(5, 3, 9)` | `9` |
| `Math.random()` | Generates a random number between `0` and `1` | `Math.random()` | `0.2345` (random) |

---

### Power & Root Methods  

| Method             | Description | Example | Output |
|------------------|-------------|---------|--------|
| `Math.pow(x, y)` | Returns `x` raised to the power `y` | `Math.pow(2, 3)` | `8` |
| `Math.sqrt(x)`   | Returns the square root of `x` | `Math.sqrt(16)` | `4` |
| `Math.cbrt(x)`   | Returns the cube root of `x` | `Math.cbrt(27)` | `3` |

---
### Trigonometric Methods  

| Method             | Description | Example | Output |
|------------------|-------------|---------|--------|
| `Math.sin(x)`   | Sine of `x` (radians) | `Math.sin(Math.PI / 2)` | `1` |
| `Math.cos(x)`   | Cosine of `x` (radians) | `Math.cos(0)` | `1` |
| `Math.tan(x)`   | Tangent of `x` (radians) | `Math.tan(Math.PI / 4)` | `1` |

## 🔹 Example Usage

```js
console.log(Math.PI);                 // 3.141592653589793
console.log(Math.round(4.7));         // 5
console.log(Math.sqrt(25));           // 5
console.log(Math.pow(2, 5));          // 32
console.log(Math.min(10, 20, 5, 30)); // 5
console.log(Math.max(10, 20, 5, 30)); // 30
console.log(Math.random());           // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10
```
📌 Generating Random Integers
To generate a random integer within a range (min, max), use:

```js
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); // Random number between 1 and 100
```