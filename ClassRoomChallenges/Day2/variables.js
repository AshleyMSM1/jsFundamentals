var myName = "Ashes"
var person1 = 'Killian'
var person2 = `NaruTim`
let animal = "tiger"

//Semicolons are optional in JS

//var is obsolete, let/ const are the more used ones

const weather = "cloudy"
console.log(weather, "weather")

//whenever using const, it has to remain the same value throughout doc or there will be an error

var myName = "Jeff"

console.log("My Name", myName )

myname = "Steve"

//Reassigning a variable, we do not need to reinitialize the value
//JS is case sensitive when naming variables

console.log("My Name Changed", myName)

let phrase = "Good Morning"

//console.log(phrase, myName)
//console.log(phrase+" "+myName)
console.log(`${phrase} ${myName}, how are you?`) //${} tells program this will be JS

//if you wanted to make the following all lowercase
let example = "The fOX JUmped OVer tHe LAZy TurtLE"

console.log(example.toLowerCase())

let name1 = "Bunny"
let name2 = "BUnNy"

let match = name1.toLowerCase === name2.toLowerCase  //example of chaining

console.log("Do Names Match?:", match)

//Include

console.log("Does this example have this word in it?", example.includes("fOX")) //must be spelled exactly the same
console.log("Does this example have this word in it?", example.toLowerCase().includes("fOX")) //example of chaining

//Length - how long is that string? Includes spaces

console.log("Length of example:", example.length)