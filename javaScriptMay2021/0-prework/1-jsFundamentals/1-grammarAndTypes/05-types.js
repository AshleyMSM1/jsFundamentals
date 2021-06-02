/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//Boolean can represent: true/false, yes/no, on/off, 0/1. Think of it as a light switch


//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value; a bucket that feels empty because we've forgotten to fill it
*/
let grass;
console.log(grass);

let undef = undefined;
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned a value of null; a bucket that is empty but we explicitly filled it
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way: null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag). Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside.
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

//Works with negatives too. Numbers can only go so high.

let notQuite = 0.2 + 0.1;
console.log(notQuite);

//JS has trouble with decimals--would need to bring in outside project. JS is not great with numbers.

let numbersAreHard = (0.2 * 10 + 0.1 *10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100'; //combined numbers because they are in strings

console.log(first);
console.log(second);

let third = 1050 + '100'; //because one side is in strings, it will treat both as strings because it makes the most sense--imagine letters within the string
console.log(third);
console.log(typeof third); //typeof tells you what's inside your bucket


//Interpolation
//lets you use strings with dynamic content (they require backticks)

//Example 1:

                          //vv dynamic content
let age = '29';
let string = `my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values
(it can hold multiple data types)
Like a bucket with many things inside
Stores things
Parent of an array

Denoted by {}
Have keys and values--color (key): 'blue' (value). Separated with a colon. Each key-value pair is separated with a comma
*/

let hulk ={
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.age); //to see just one of the above properties, use a dot notation
console.log(typeof hulk);

//Arrays
/*
Arrays stores multiple values in an ordered way. They, too, hold multiple data types.

Denoted by []
Has values ('blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
//array indexing                0                   1                   2             3             4
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]); //{  []} are array's form of dot notation [9:19}]
console.log(typeof stepsToBrushTeeth);