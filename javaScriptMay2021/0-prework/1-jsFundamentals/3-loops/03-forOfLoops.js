/*
FOR OF LOOPS
*/

//of requires that your 'thing' that you're looping through to be iterable
//that means it needs to be numbered
//for of grabs the value of the 'thing', not the number or the key

//the below does not work due to the above reason
//let student = {name: 'Peter', isAwesome: true, degree: 'Javascript', week: 1};

//for (item of student){
//    console.log(item);
//}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat of catArray){
    console.log(cat, 'says meow');
}