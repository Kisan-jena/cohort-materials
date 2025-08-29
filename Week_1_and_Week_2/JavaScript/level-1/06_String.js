//* string iterpeltaion

const gender='male'
console.log(`heelo my name is ${'kisan'},and iam a ${gender}`);

let any= new String('kisan')

console.log(any[0]);
console.log(any[4]);

console.log(any.__proto__);
console.log(any.length);

any = any.toUpperCase();
console.log(any.charAt(3));
console.log(any.indexOf('i'));
console.log(any.indexOf('h'));

console.log(any);

//^ Substring
const neww=any.substring(0,3)
console.log(neww);

//^ slicing
const slicing=any.slice(-5,-2) 
console.log(slicing);

//^ trim works on white space 
let email='     ganja@.com      '
console.log(email);
console.log(email.trim());

//^ Replace
let url='https://meet.google.com/landing?%534authuser=5'
console.log(url.replace('%534','_'));

//^includes
console.log(url.includes('met'));

//^ split
let stringg='what i mean to u'
console.log(stringg.split(' '));
console.log(stringg.split(' ')[3]);







