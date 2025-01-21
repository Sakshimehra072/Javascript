//CONVERSION OF STRING INTO NUMBER

let score = "33abc"  //string vlaue (written in "")
console.log(score)   // will print the value if score op : 33abc

console.log(typeof score)  //print the datatype of score in output: string 
console.log(typeof(score) )//print the datatype of score output :string 

/*     ----------CONVERSION------------   */

let value = Number(score) //let: declaring new variable, value: name of variable where vlaue store, Number: because we are converting string value in number
console.log(typeof value) // output : number
console.log(value)        //NaN : Not a Number vlaue soed in varible(named value) is a string not a nuber 


// BOOLEAN CONVERSION 
   
let AccountIsPrivate = 3
console.log(AccountIsPrivate)   //prints assigned value
console.log(typeof AccountIsPrivate)   // output : 3 (non zero value which means true )
/*   -------conversion-------   */

let account = Boolean(AccountIsPrivate)  // it will covert 1 into boolean value i.e true (except 0 or empty string as false , it prints every other numb as true )
console.log(account)


//Number to string
console.log("NUMBER TO STRING conersion")
let anumber = 23
let numberInString = String(anumber)
console.log(numberInString)      //ths print 23 but after conbersion numberInString it becomes a string
console.log(typeof numberInString)    