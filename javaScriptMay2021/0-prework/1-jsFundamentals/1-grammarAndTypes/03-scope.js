/*
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//EXAMPLE 1
var x = 12; // variable in global scope--meaning ready and available to use anywhere

function scope(){  // function is in charge of running some block of code--think of it as a powertool to be used
    var x = 33; // scope has its own narrow (local) view--exists within that function
//  var y = 10; <--- will not work outside the scope because it was established only within the scope
    console.log(x);
}
scope(); // logs 33, because variable x was established as 33 within the scope
console.log(x); // logs 12, because original variable was listed as 12 and this is not recalling the scope
//console.log(y) <--- will not work for the above reason


//EXAMPLE 2
var x = 12;

function scope (){
    x = 33; //x was reassigned as 33, and this will exists outside the scope as well
    console.log(x);
}

scope() //33
console.log(x); //33


//EXAMPLE 3
var x = 1;

function scope(){
    var x = 2;
    function Innerscope(){
        var x = 3;
        console.log(x) // 3 - the first console log that gets ran
    }
    scopeInner();
    console.log(x); // 2 - because you're outside of the scope due to }
}
scope();
console.log(x); // 1 - because we are in the global scope where x = 1


//EXAMPLE 4 CONTRASTS WITH 5
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); // 45 - innermost scope 
    }
    console.log(x); // 33 - middle scope
}

scope();
console.log(x); // 12 - global scope


//EXAMPLE 5 CONTRASTS WITH 4
var x = 12;

function scope (){                                                      // | starting with {
    var x = 33;                                                         // |
    if (true){                                  // | starting with {    // |
        var x = 45;                             // |-- block scope      // |-- function scope
        console.log(x); // 45 - inner scope     // |                    // |
    }                                           // | ending wth }       // |
    console.log(x); // 45 - var doesn't obey 'block' scope              // |
}                        // only cares if curly braces                  // | ending with }
                         // goes with the function scope
scope();
console.log(x); // 12 -global scope
