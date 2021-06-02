/*
FOR IN LOOPS
*/

//in does not require that the thing you loop through be numbered

//              vv              vv            vv                    vv ITEMS
//let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

//for (item in student){
//    console.log(item);
//    console.log(student[item]);  //how to check what items are
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']
for (cat in catArray){
    console.log(cat);
//the above shows up as an array
    console.log(catArray[cat]);
//the above shows value, but together they show value and array
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAuL';
let capName;

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);