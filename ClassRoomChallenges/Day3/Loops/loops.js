let a = 0
a = a + 1
console.log(a);
// expected output: 1

a++;
console.log(a);
// expected output: 2

a--;
console.log(a);
// expected output: 1

let squared = 2 ** 2; //important to know how to do exponents for test
console.log(squared);
// expected output: 4

squared = 8 ** 2; 
console.log(squared);
// expected output: 64

//Remainder
console.log(12 % 5); // how many times does 12 go into 5, but I just want the remainder
// expected output: 2

console.log(35 % 2);
// expected output: 1
console.log(36 % 2);
// expected output: 0

let numberToCheck = 25

// Checking if a number is odd or even
if (numberToCheck % 2 === 0) {
    console.log("This is even")
} else {
    console.log("This is odd") 
}

// Going over arrays - adding to array using .push
let newArray = []

newArray.push("apple");
newArray.push("orange");
console.log(newArray);
/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeatedly
*/

/* BRONZE

    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.

*/

/* SILVER

    - Write a conditional (if statements) that is nested **inside of** the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.

*/

/* GOLD

    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation (keyword for backtics [``]) - console.log 'the index ___ is an odd number'.

    - Use Google to search for an array method that allows you to add one or more elements to an array

*/

/* PLATINUM

    - Convert the conditional into a ternary

*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//BRONZE
for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);


//SILVER
    if (i % 2 === 0) {
      // EVEN
      console.log(alphabet[i]);
    } else {
      // ODD
      console.log("the index is an odd number");
    }
    //   console.log(alphabet[i]);
  }
  

//GOLD
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = []

for (let i = 0; i < alphabet.length; i++){
if (i % 2 === 0) {
    // EVEN push to the arr array & console log new arr
    arr.push(alphabet[i]);
    console.log(arr);
  } else {
    // ODD string interpolation the index ___ is an odd number
    console.log(`the index ${i} is an odd number`); //can change "[i]"" with "alphabet[i]"
  }
  //   console.log(alphabet[i]);
}