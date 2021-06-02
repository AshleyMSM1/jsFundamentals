/*
SWITCH STATEMENTS
*/

let friend = 'Andy';

switch(friend){
    case 'JoHannes':
        console.log('Hey JoHannes, when will you play your guitar?');
        break; //used to stop all lines of code from running at once
    case 'Mary':
        console.log('Hey Mary, when are you going to finish making that dress?');
        break;
    case 'Brice':
        console.log('Hey Brice, when are you gonna finish that art piece?')
        break;
    case 'Andy':
        console.log('Hey Andy, when are you gonna finish that song?')
        break;
    default: 
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
}