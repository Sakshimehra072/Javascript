const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId)  //false
console.log(id === anotherId)  //false

/* id == anotherId:
The == operator compares values for equality, but since symbols are unique by nature, even though both symbols have the same description ("123"), they are not the same symbol.
Therefore, this comparison returns false.

id === anotherId:
The === operator checks for strict equality. In this case, it checks if both symbols are the same object reference.
As mentioned, symbols are unique, so even though their descriptions are the same, they are different symbols, and this comparison also returns false.

Both == and === return false because symbols are always unique, even if they have the same description. Symbols with the same description are still different objects, making both equality checks return false.
 */