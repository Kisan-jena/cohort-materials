// & Foundation

let namee='kisan'
let age=20
let ismarried=false

console.log('heelo')
console.log('my name is '+namee+' age is '+age);

if (ismarried){
    console.log(namee+'is maaried');
} else{
    console.log(namee+' is not maaried');
}

let answer=0
for (let i = 1; i < 5; i++) {
    console.log(i)
    answer=answer+i
}
console.log('answer is '+answer);

// & Objects , Array and array of objects


// ^ ARRAY

//* 1. Write a program prints all the even numbers in an array

const Std_array=['kisan','anjali','jayanti'];
console.log(Std_array[2]);

const ages=[2,3432,44,0,11,12,23,22,2,3,4,24234,3435,7,35,4,553,252,33];

for (let index = 0; index < ages.length; index++) {
    if (ages[index] % 2 == 0 & ages[index] != 0 ) {
        console.log(ages[index]);
    }
}

const gender_array=['male','female','female'];

for (let index = 0; index < gender_array.length; index++) {
    if (gender_array[index]=='male') {
        console.log(Std_array[index]);
}
}

//* 2. Write a program to print the biggest number in an arrya

const numArray=[1,2,33,4,5,99,123,343,3,4]
let big_num=0

for (let index = 0; index < numArray.length; index++) {
    if (numArray[index]>big_num) {
        big_num=numArray[index]
    }
}
console.log("biggest num in array "+big_num);


// ^ Objects and array of objects


const any={
    Name:'kisan',
    dob:2004,

    name_array:['kisan','pisan','cisan'],
    dob_array:['04','05','06']
}
console.log("any['dob_array'] : ",any['dob_array']);
console.log("any.dob_array : ",any.dob_array);


//* 3. Write a program that prints all the male people’s first name given a complex object
const Allusers=[{
    Name:'kisan',
    gen:'male',
},{
    Name:'sonu',
    gen:'male'
},{
    Name:"aman",
    gen:'female'
}]

for (let index = 0; index < gender_array.length; index++) {
    if (Allusers[index]['gen']=='male') {
        console.log(Allusers[index]['Name']);
}
}

//* 4. Write a program that reverses all the elements of an array

const numArray1 = [1, 2, 33, 4, 5, 99, 123, 343, 3, 4];
console.log("Original array:", numArray1);

let reversedArray = [];

// Loop to reverse the array and store it in a new array
for (let index = numArray1.length - 1; index >= 0; index--) {
    reversedArray.push(numArray1[index]);
}
console.log("Reversed array:", reversedArray);


// & Function


// ^ Functions CAN take other functions as input - this will confuse you (callbacks)

// ^ normally
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans=sum(2,3)
displayResult(ans)

// ^ without using call back

function sum(num1, num2) {
    let result = num1 + num2;
    return displayResult(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const ans1=sum(1,3)


// ^  using call back and also 3. Write another function that takes this sum and prints it in passive tense

function sum(num1, num2,fntocall) {
    let result = num1 + num2;
    fntocall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const answerr=sum(4,3,displayResult);

// ^
function calculation(a, b,fn_to_call,fn_to_call2) {
    const ans = fn_to_call(a,b)
    return fn_to_call2(ans);
}

function sum(a,b){
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function displayResult(data) {
    return "Result  is : " + data;
}

const ab=calculation(30,3,sum,displayResult);
console.log(ab);

// ^ set timeout use internally a callback

function greet(){
    console.log("Welcome Everyone");
}
setTimeout(greet,5*1000)