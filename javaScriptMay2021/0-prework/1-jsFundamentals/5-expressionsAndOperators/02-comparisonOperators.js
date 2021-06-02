/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

//strict equality comparison operator
//cares about values AND types
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison operator
//does not care about type
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison operator
console.log('3' !== 3);
console.log(3 !== 3);

//greater than
console.log(3 > 2);
console.log(2 > 3);

//lesser than
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to
console.log(3 >= 2);
console.log(2 >= 3);

//lesser than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And
//Both expressions on either side of the operator must be true for 'And' to return true
console.log(1<2 && 3>2);
console.log(1>2 && 3<2);

//Or 
//Either expression on one side of the operator must be true for 'Or' to return true [11.24]
console.log(1<2 || 3<0);
console.log(1>2 || 2>3);

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //they are not considered the same--just duplicates
console.log(obj == obj); //these are the exact same thing to the program

let arr =[1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr)
