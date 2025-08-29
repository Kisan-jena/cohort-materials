//& Numbers
const score=400
console.log(score);

const score1=new Number (4003)
console.log(score1); // run in google console to know the methods

//^ change to string
console.log(score.toString().length);
console.log(score1.toString().length);

//^ precision
const n=534.01134
console.log(n.toPrecision(4));

//^ tofixed
console.log(n.toFixed(2));

//^ toLocaleString
const zero=10000000
console.log(zero.toLocaleString('en-US'));
console.log(zero.toLocaleString());
console.log(zero.toLocaleString('en-IN'));

//& Maths
