// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

//1
let FB = 30;

//modulus operator [%] is an arithmatic operator that returns the division remainder
//2
if (FB % 3 === 0 && FB % 5 === 0) { //&& is a logical operator that allows us to compare
    console.log("Fizz Buzz")        //two or more expressions
} else if (FB % 5 === 0) {
    console.log("Buzz")
} else if (FB % 3 === 0) {
    console.log("Buzz")
} else {
    console.log("Your number is not divisible by 5 or 3")
}

//SWITCH
// let FB = 30; <-- already stated above
// switch(/*expression*/){
//    case (/*case (conditional)*/):
//        //console.log()
//        break;
//    case(/*case (conditional)*/):
//     //console.log()
//     break;
//    case(/*case (conditional)*/):
//     //console.log()
//     break;
//     default:
//    //console.log()
// }

switch (true) {
    case FB % 3 === 0 && FB % 5 === 0:
    console.log("Fizz Buzz");
    break;
 case FB % 5 === 0
    console.log("Buzz");
    break;
 case FB % 3 === 0
    console.log("Fizz");
    break;
    default:
    console.log("Your number is not divisible by 5 or 3");
}

//TERNARY
(FB % 3 === 0 && FB % 5 === 0)
? console.log ("Fizz Buzz")
: ( FB % 5 === 0)
? console.log("Buzz")
: (FB % 3 === 0)
? console.log("Fizz")
: console.log("Your number is not divisible by 5 or 3")