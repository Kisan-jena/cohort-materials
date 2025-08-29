"use strict";

//* alert(3+3) , we are using node.js not goggle
/*
& Data Types
number,string,boolean,null,undefined,synbol
*/
let num="212"

console.log(typeof num);
console.log(typeof null); //^ gives 0
console.log(typeof undefined); //^ gives undefined only

/*

* primitives (Call by values)
^ 7 types : string,number,boolean,null,undefiend,symbol,BigInt

* Reference type or Non primitive (Call by reference)
^ Array, objects, Functions

*/

const fruits=['apple','mango','banana'] //^ array, returntype: object

let myobj={                             //^ Object, returntype: object
    name:'kisan', 
    age:22
}    

const myfunction = function(){         //^ Function, returntype: function object 
    console.log('heeelo');
}
myfunction()

console.log('\n',`typeof:${typeof myobj}`);
