
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2!=1)

// ------comparision of different data types--------

console.log("2">1)   // js automatically converts "2"(string value) into nmumber
console.log("02">1)

console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null >= 0)  // true
/*The reason is that an equallity check == and comparisons > < >= <= works differenty
Comparisions convert nul to a number, treating it as 0.
That's why "null >= 0 " is true and null >0 is false */  // 1:30 
