//& CONVERSIONS
let value='33'
let value2=undefined //^ put here null,undefined,'33absc',false and check it

let Value_in_num=Number(value)
let Value_in_num1=Number(value2)

console.log(typeof value2);

console.log(typeof Value_in_num);
console.log(Value_in_num);
console.log(typeof Value_in_num1);
console.log(Value_in_num1);

/*
"33" => 33
"33abc"=> nan
"string" => nan
null => Nan
true => 1 and false => 0

* Nan = Not a number
*/

let any=""

let any_to_bool=Boolean(any)
console.log(any_to_bool);

// "" = flase , " any thing "= true
// 1 = true , 0 = false

//& OPERATIONS
// all basic opertaion like arithmetic,relationship, string concatenation etc

console.log('mumbai'+' Indians');
console.log('1'+2);
console.log("1"+'2'+'3');
console.log("1"+2+3);
console.log(1+2+'3');

let x = 5;
let y = ++x;  // x is incremented first, then y is assigned the value of x.

console.log(`y:${x}, y:${y}`); 

let a = 5;
let b = a++;  // b is assigned the value of a first, then a is incremented.

console.log(`a:${a}, b:${b}`); 