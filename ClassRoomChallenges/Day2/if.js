/*
CONDITIONALS - Conditional statements control behavior in JavaScript and determine whether or not if code can run. Conditionals will check if an epression is true. IF the expression is true, a b code will run.
*/

/*
Falsy Values - considered false.

1.) false
2.) null - has no value
3.) undefined
4.) 0
5.) NaN - Not a Number
6.) " " - empty string
*/

/*
Truthy Values - considered true.

1.) true
2.) a number that isn't 0, incl positives and negatives
3.) "string that isn't empty"
*/

let snowing = true;

if(snowing == true){
    //true
    console.log("It is snowing outside!");
}

//shorthand
if (snowing) { //true
    console.log('It is still snowing!');
}

/*let snowing = false;

if (snowing == false) {
    console.log(`It stopped snowing. It's too warm`); //wanted to use apostrophes
}

if(snowing){  //false, so it will not run.
    console.log('It is not snowing. Bummer!');
}
*/

/*
IF ELSE - If the expression is false, it will run the next block of code. 
The else statement specifies a block of code to be executed if the condition is false.
*/

let puppies = 3;
if (puppies < 1) {
    console.log('I need more puppies.');
} else {
    console.log('I have enough puppies!');
}

let myName = "Cashes";
if (myName == "NaruTim") {
    console.log(`Hello! My name is ${myName}.`);
} else {
    console.log(`Hello, is your name ${myName}?`);
}

/*
Challenge! 

BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.

SILVER
Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

GOLD
In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!
*/

//Bronze:

let name1 = "Ashes"
let name2 = "JoHannes"

console.log("Length of name 1:", name1.length)
console.log("Length of name 2:", name2.length)


//Silver:

let Ashes = 5;
let JoHannes = 8;
if (Ashes < JoHannes) {
    console.log('I have a longer name than JoHannes.');
} else {
    console.log('JoHannes has a longer name than me.');
}

//another example

let myNames = "Ashess"
let friendName = "JoHanness"

if (myNames.length > friendName.length) {
    console.log(`${myNames}'s name is longer than ${friendName}'s name.`)
} else {
    console.log(`${friendName}'s name is longer than ${myNames}'s name`)
}


//Gold:

 if (myNames.length > friendName.length) {
    console.log(`My Name is longer than ${friendName}'s name by ${myNames.length - friendName.length} letters`)
 } else if (myNames.length < friendName.length) { 
    console.log(`${friendName}'s name is longer than mine by ${friendName.length - myNames.length}`)
 } else {
     console.log('Our names are the same length.')
 }


 //Platnium

 let stankFace = "Ashley"
 let skankFace = "JonesDebber"

 let nameDebate = (stankFace.length > skankFace.length) ?  (`${stankFace} is bigger by ${myName.length - skankFace.length} letters`)
: (skankFace.length > stankFace.length) ? (`${skankFace} is bigger by ${skankFace.length - stankFace.length} letters`) : ("Our names are the same length")

console.log (nameDebate)


