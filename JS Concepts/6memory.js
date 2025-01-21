//  1. Stack (where Primitive data type is used)   , 2. Heap (Non-Primitive)
//  we get a COPY of variable in stack
//  we get REFERENCE of original value in Heap
/*            -----------STACK----------------                               */
let myYoutubename ="abc";

let anothername = myYoutubename; // anothernane is equals to myYoutube name

anothername = "xyz" ;// But here anothername is xyz not myYoutubename because we have copy of varible we made change in copied value not in original variable 

console.log(myYoutubename);  //----> output : abc
console.log(anothername);   //-----> output : xyz

/*                  ---------------HEAP------------------            */
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo= userOne
    userTwo.email = "name@google.com"

    console.log(userOne.email); // --->output : name@google.com   (even after changing the value both variables refered to same value )
    console.log(userTwo.email); // --->output : name@google.com 
++u8i