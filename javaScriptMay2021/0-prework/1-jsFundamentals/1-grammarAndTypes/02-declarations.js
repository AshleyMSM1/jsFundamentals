/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
//A variable is like a bucket
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1.) a variable must begin with a letter, underscore or dollar sign
//2.) numbers may follow the above characters but cannot come first
//3.) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONNS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable
Initializations refer to when a variable is assigned a value
Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x); //<-- undefined - declaring a variable but content empty

x = 10; //Iniitialation
console.log('Initialization 1:', x); //10

x = 33;
console.log('Assignment 1:', x) //33

var y;
console.log(y); // unbdefined

y = 'hello';
console.log(y);

y = 'you are my fren'
console.log(y);

/*
Var, Let, Const

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
^^^ consider buckets
Const = also 'new', declares *unchangeable* variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

//console.log(tonight, elevenFifty); // error