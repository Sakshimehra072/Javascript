// Datatypes in js and typof oprator
// A. PRIMITIVE DATA TYPE
//1 string
const str = "This is it"
console.log(str)
console.log("typeof is :" ,typeof str)

//2 Number
const score = 100
const updatedscore = 100.3
console.log("typeof is :" ,typeof score);
console.log("typeof is :" ,typeof updatedscore);

//3 Boolean
const value = true
console.log("typeof is :" ,typeof value)

// 4 NULL
const temprature = null
console.log(temprature);
console.log("typeof is :" ,typeof temprature);

// 5 Undefined
let userEmail;
// or
// let userEmail = undefined
console.log("typeof is :" ,typeof userEmail)

// 6 Symbol (to make any vlaue unique , even two variables have same value but both are unique if we use symbol)

const id = Symbol('123')
const anotherid = Symbol('123')
console.log("typeof is :" ,typeof id)
console.log("typeof is :" ,typeof anotherid)

// 7 BigInt
 const bignumber = 123849369345663748932n
 console.log("typeof is :" ,typeof bignumber)

// NON-PREMITIVE DATA TYPE
// 1 Function
const myFunction = function(){
    console.log("hello");
}
myFunction();
console.log("typeof is :" ,typeof myFunction);

// 2 Array
const computerscience = ["c","cpp", "js", "go"]
console.log(computerscience);
console.log ("typeof is :" ,typeof computerscience);

// 3 Object
const myDetails = {
    name : "Sakshi",
    age: '23',
    gender: "Female",
}
console.log(myDetails);
console.log("typeof is :" ,typeof myDetails);

const cs = ["c","cpp", "js", "go"]
console.log(cs);
console.log ("typeof is :" ,typeof cs);


// typeof of non-premitive data is "object" , typeof of function is function (it is also called function object )
// reference : Ecma script