/*----------------------------STACK----------------------------------------
used to store static data which includes primitive datatypes
*/
let myEmail = "sakshi@gmail.com"
let anotherEmail = myEmail
anotherEmail = "mehra@gmail.com"
console.log(myEmail)
console.log(anotherEmail)

/*both myEmail and anotherEmail have its orignal values because in stack memory copy of orignal variable creates and value of copy variable 
changed (Changes will not reflect in origna value)
*/
/*----------------------------------HEAP--------------------------------
 used to store non primitve data (object, functions, arrays)
*/

userOne = {
    email : "sakshi@gmail.com", 
    upi: "user@pbi"

}
let userTwo=usrOne   
userTwo.email= "sakshi@google.com"
console.log(userOne.email);
console.log(userTwo.email); 

/*In HEAP memory the reference of orignal variable is given to both the variables (userOne and userTwo) thats why change in userOne changed the 
value of useeTwo  (*changes in other value reflects the change in orignal value)
 */