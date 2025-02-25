//   STRING
// concatination of strings :

const name = "abc "
const course = "mca "

console.log(name + course + "year"); //concatination using + sign 
console.log(`hello my name is ${name} and my course is ${course}`);  // concatination usnig `` ✔️
// This method (concationation using `` is called string interpolation )

// more 
const Name = new String('Sakshi')

console.log(Name[0]);    // value at 0th key, it is a key value pair
console.log(Name.length);
console.log(Name.toUpperCase());   
console.log(Name);
console.log(Name.charAt(3));        //to check at what position which element are there
console.log(Name.indexOf('d'));    // to check which element at what position

//dividing or slicing a string into substring (by declaring a new varible to store the value of substring )

const newString = Name.substring(0, 4)   //4th element is not included(do not work for -ve value)
console.log(newString);
//or 
const anotherString = Name.slice(-6, 4)  // -6 (element at 6th from last , 6th is not included)
console.log(anotherString);

//-------TRIM or REPLACE-------  (To remove unwanted spaces )

const valuetobetrimed = "      sakshi     " 

console.log(valuetobetrimed);
console.log(valuetobetrimed.trim())
/*  PTR:      
A new string representing str stripped of whitespace from both its begining and end .
whitespace ----> space  & line terminator (\n) */


//--------------REPLACE----------------- (replacing space or %20 from url link)

const url = "https://sakshi.com/abc%20xyz"
console.log(url.replace('%20', '-'))

 