## `HTML TAGS ( some imp tags) `
* html
* head
* title
* body
* div ( takes all space horizontally ) 
* span( takes space horizontally as nedded )
* h1....h6
* p
* img
* a
* input
* button
* b / i
* centre
* br

##### Attributes
* 
  ![alt text](z.png)

## `CSS` 
##### 1. BASICS 
* Some basics Css, background,shadow,border,font-size,border-radius 
* Code :- 
  ![alt text](image.png)
* Output :- ![alt text](image-1.png)
##### NOTE : Use Inspect for try and error 

* 
  ![alt text](image-2.png)
##### Remove and back to normal after reloading pages!!!!!!!!!!!
* 
  ![alt text](image-3.png)

##### 2. some Important things to know. 
* Use flex box concept with div to postioning the element.
* Dont use float and absoulte postioning.
* Padding use indside Div to postioning components inside div.
* Margin use out side a div to postioning components inside div and to postioning Div also.
  
## `JAVA SCRIPT`
### `WEEK 1`
### `1.` `BASICS `
* CONTENT 
  * 1.1 Why language?
  * 1.2 Interpreted vs compiled languages
  * 1.3 Why JS >> Other languages in some use-cases
  * 1.4 Strict vs dynamic languages
  * 1.5 Single threaded nature of JS
  * 1.6 Simple primitives in JS (number, strings, booleans)
  * 1.7 Complex primitives in JS (arrays, objects)
  * 1.8 Functions in Javascript
  * 1.9 Callback functions, Event loop, callback queue, Asynchronous programming


#### `1.1` WHY Language?? 
* languages help to write an application , where as human communicate human with machine by the help of Interpreter and compiler , bcoz machine cant understand high level languages.

#### `1.2` Interpreted vs compiled languages
* Compiler 
  * Compiler firest need to compile whole thingh, then need to run
  * Stop if there is any error in between 
  * Ex:- C++,java,rust,golang

* Interpreter
  * Go line by line
  * Can run partially if there is an error
  * Ex: js, py
  
#### `1.4` Strict vs dynamic languages
* In strict lang u have to mention datatype and in dynamics it will recoginize it automatically.![alt text](image-5.png)

#### `1.5` Single threaded nature of JS
* Interpreter language are mostly slow bcoz of single core or single thread.![alt text](image-6.png)

#### `NOTE :`
* We can make a array of objects also ![alt text](image-7.png)

#### `1.6` Functions

* Abstract out logic in your program
* Take arguments as an input
* Return a value as an output
* You can think of them as an independent program that is supposed to do something given an input
* Functions can take other functions as input or function used as parameter or function passed as argumnmet to other function (`callbacks :` used in asynch funcion)
* Normally 
  * Input code:
    ![alt text](image-8.png)
  * Output : 
  ![alt text](image-13.png)

* Without callbacks 
  * Input code:
    ![alt text](image-9.png)
  * Output:
  ![alt text](image-14.png)
   
* With Callbacks
  * Input code:
    ![alt text](image-10.png)
  * Output: 
  ![alt text](image-11.png)

* CALLBACK IS USED IN REAL TIME PROJECT 
  * One example is the setTimeout , output after 5 sec appears
  ![alt text](image-15.png) 

#### `1.7` Callback functions real used in asynch funcion , JS arch (Event loop,Callback queue) Asynchronous programming

##### Synchronous programmming
* In sequence step by step

##### ASynchronous programmming
* Context switching in between the process or doing parallely the given process

##### `For Ex:` There is a process of froming maggi 
* So the time taken for `(Synchronous)`  5 min for water boling + 5 min chopeing veges + 5 min to purchase sauce from market + 5 min maggi preperation.
* Total time by synchronously is 20 mins
* And for the `(Asynchronous)` 5 min for water boiling,chopeing veges + 5 min maggi preperation
* Total time by Asynchronously is 10 mins
  
##### How does JS do the same? Can js delegate? can Js context switch
* ASynch example in which setTimeout is asynch function define by js only
* `Examples:`
* `1.` 
       ![alt text](image-64.png)
       ![alt text](image-66.png)
* `2.` 
       ![alt text](image-70.png)
       ![alt text](image-69.png)
* `3.` In below example we see that output of a.txt is showing after a "hi there 2" even though reading file is complete the main thread is busy some where else .
  ![alt text](image-71.png)
  ![alt text](image-72.png)

* Synchronus example 
  ![alt text](image-65.png)
  ![alt text](image-67.png)

##### Visualize how asynch nature is working by wisting this link http://latentflip.com/loupe/

#### `1.8`  Promises
* Promises are syntactical sugar that make callback function more readable
* DEf :-A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers
* 
  ![alt text](image-79.png)
  ![alt text](image-80.png)
*  Promises are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. A Promise allows you to work with async code without falling into `"callback hell"` making the code more readable and manageable.

`Examples:`
* Simple code without promises
  ![alt text](image-73.png)
  ![alt text](image-74.png)

* It is just a wrapper on top of another async function, which is fine. Usually, all async functions you will write will be on top of JS provided async functions like `setTimeout` or `fs.readFile` 
![alt text](image-75.png)
![alt text](image-76.png)

* Proper way  or cleaner way to write an asynch code
  ![alt text](image-77.png)
  ![alt text](image-78.png)

#### `NOTE :`
* Both give same result
  ![alt text](image-81.png)
* same as above code
  ![alt text](image-82.png)


#### `NOTE :`
* CODE : In this console.log(ab) is having return value from displayresult i.e return "Result  is : " + data, so in this output is give n by console.log(ab)
  ![alt text](image-16.png)
  Ouput : 
  ![alt text](image-17.png)
* CODE : In this the console.log(ab) is not having anything in return value from displayresult which is the last callabck function , and the output value is doing by function not by console.log(ab) 
  ![alt text](image-18.png)
  Output :
  ![alt text](image-19.png)

### `2.` `SOME USEFULL BUILT-IN METHODS `
* CONTENT :
  * 2.1 STRING
  * 2.2 NUMBERS
  * 2.3 ARRAYS 

#### `2.1` `String :` 
  * string.length 
  ![alt text](image-20.png)![alt text](image-21.png)
  * string.indexOf( ) 
  ![alt text](image-22.png)![alt text](image-23.png)
  * string.lastIndexOf( )
  ![alt text](image-24.png)![alt text](image-25.png)
  * string.slice( ) 
  ![alt text](image-26.png)![alt text](image-27.png)
  * string.substring( )
  ![alt text](image-28.png)![alt text](image-29.png)
  * string.substr( )
  ![alt text](image-30.png)![alt text](image-31.png)
  * string.replace( )
  ![alt text](image-32.png)![alt text](image-33.png)
  * string.split( )
  ![alt text](image-34.png)![alt text](image-35.png)
  * string.trim( )
  ![alt text](image-36.png)![alt text](image-37.png)
  * string.toUpperCase( )
  ![alt text](image-38.png)![alt text](image-40.png)
  * string.toLowerCase( )
  ![alt text](image-39.png)![alt text](image-41.png)

#### `2.2` `Numbers :` 
* ParseInt
  ![alt text](image-42.png)![alt text](image-43.png)
* ParseFloat 
  ![alt text](image-44.png)![alt text](image-45.png)

#### `2.3` `Arrays :` 
*  push()
*  pop()
*  shift()
*  unshift()
*  splice()
*  slice()
*  concat()
*  forEach()
*  map() 
*  filter() 
*  reduce()
*  find()
*  sort()
  
### `3.` `CLASSES`

* Input : In this we use normal methods which we can call with objetc only 
  ![alt text](image-46.png)
* Output :
![alt text](image-47.png)

#### `NOTE :`
* Input :![alt text](image-48.png)
* Output :![alt text](image-49.png)

### `4.` `DATES`
* Input :
  ![alt text](image-52.png)
* Output: 
  ![alt text](image-51.png) 

* `Use Case :`
  ![alt text](image-53.png)
  ![alt text](image-54.png)

  
### `5.` `JSON `
* In this a JSON  string is converted into a json object by using `JSON.parse` and again converted into json string by using `JSON.stringify`
  ![alt text](image-55.png)
  ![alt text](image-56.png)
* EXAMPLE1 :
  ![alt text](image-57.png)
  ![alt text](image-58.png)

#### `NOTE : Difference b/w JSON and JS Object`

* `1.` JSON (JavaScript Object Notation):
  * JSON is a data format used to represent structured data as text.
  * It is strictly a string and can only store data, not functions or variables.
  * JSON keys and values must follow certain rules: keys are always strings (enclosed in double quotes), and values must be strings, numbers, booleans, arrays, or objects.
  * It is used for data exchange between systems, often in APIs and file storage.
  ![alt text](image-60.png)
  ![alt text](image-61.png)

* `2.` JavaScript Object (JS Object):
  * A JavaScript object is a data structure in JavaScript that stores data in key-value pair
  * It can contain various data types (strings, numbers, booleans, arrays, functions, other objects).
  * The syntax allows you to use variables, functions, and more complex data types.
  * You can interact with JavaScript objects programmatically (e.g., manipulate properties, call methods).
  ![alt text](image-59.png)


| Aspect         | JavaScript Object                    | JSON                                             |
|----------------|--------------------------------------|--------------------------------------------------|
| **Type**       | Native JavaScript object             | A string format used for data representation      |
| **Syntax**     | Can have variables, functions, etc.  | Only supports data (strings, numbers, arrays, booleans, objects) |
| **Usage**      | Used within JavaScript programs      | Used for data transfer (e.g., APIs, databases)    |
| **Quotes**     | Key names can be unquoted            | Keys must be double-quoted                       |
| **Data Types** | Supports complex types like functions, undefined, etc. | Supports limited types (no functions, undefined, etc.) |


### `6.` `MATHS`


### `7.` `OBJECTS`
![alt text](image-62.png)
![alt text](image-63.png)

### `8.` `MAPS`
![alt text](image-85.png)
![alt text](image-86.png)

### `Week 2`

#### `1.` `Revison`
* Normal function : In which we are repeationg ourself for every individual task, for like in this sum of cubes,square.
![alt text](image-83.png)

* Using callback : we can generalize the task `"Notice the amount of space we cutoff just bcoz of call back"`
![alt text](image-84.png)

#### `2.` `Asynch/Await`
  The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations. async/await is essentially syntactic sugar on top of Promises.  

* Call back hell (Callbacks version)
  ![alt text](image-91.png)

* Call back hell (promisified version)
  ![alt text](image-90.png)

* Solved using asynch await
  ![alt text](image-92.png)

##### Assignment: 
`1.`Write code that
* logs hi after 1 second
* logs hello 3 seconds after step 1
* logs hello there 5 seconds after step 2
![alt text](image-93.png)

`2.` Write a function that
* Reads the contents of a file
* Trims the extra space from the left and right
* Writes it back to the file
* callback approach
  ![alt text](image-94.png)
* Promisified approach using asynch/await
  ![alt text](image-95.png)

* `NOTE :` 
  1. Things to keep in mind You can only call await inside a function if that function is async
  2. You cant have a top level await 

#### `3.` `Most used Commands` 

![alt text](image-96.png)
![alt text](image-97.png)
![alt text](image-98.png)
![alt text](image-99.png)





### `VARIABLES`
##### Const,let and var
* Const variable if u used so the value cant change with that function 
* In let var we can change the value 
* Var majorly not used ,bcoz issue in block scope and functional scope

#### BLOG
* In JavaScript, numbers and strings are primitive data types, not objects. However, they can be treated like objects in certain situations because JavaScript automatically wraps these primitives with object counterparts, called wrapper objects. This process is known as autoboxing.
![alt text](image-03.png)
* Wrapper objects : JavaScript provides Number and String  constructors, which are object versions of these primitives. When you try to access a method or property on a number or string primitive, JavaScript automatically wraps the primitive in a corresponding object (like Number or String) so that you can use object methods like .toFixed() or .toUpperCase().
* When you use new Number(100) in JavaScript, you're creating a Number object rather than a primitive number. This is generally not recommended because it can lead to unexpected behavior, as objects and primitive values behave differently.
![alt text](image-04.png)
* Equality checks :  When comparing a primitive number with a Number object, they are not strictly equal (===) because one is a primitive and the other is an object.
![alt text](image-06.png)

#### `NOTE :`
###### The difference between == (loose equality) and === (strict equality) in JavaScript is primarily about how they handle type coercion during comparison.
###### Use == when you want to allow type conversion and are okay with loose comparisons.Use === when you want to ensure both value and type match exactly, which is generally recommended for clearer and more predictable comparisons.
| Feature          | `==` (Loose Equality)                                  | `===` (Strict Equality)                                   |
|------------------|-------------------------------------------------------|----------------------------------------------------------|
| Type Coercion    | Yes, it performs type conversion before comparison.    | No, it does not perform type conversion; both operands must be of the same type. |
| Comparison        | Compares values after converting them to a common type. | Compares values without any conversion; both must be of the same type and value. |
| Examples          | `0 == '0'` is `true`                                 | `0 === '0'` is `false`                                  |
|                   | `null == undefined` is `true`                        | `null === undefined` is `false`                         |
|                   | `1 == true` is `true`                                | `1 === true` is `false`                                 |
|                   | `[] == 0` is `true`                                  | `[] === 0` is `false`                                   |


### `Meomery`
#####   `1. Stack ( used by primitive datatypes )`
#####   `2. Heap ( used by non primitive datatypes )`
*  Refers 05_Meomery_system.js to understand with below Scenario
  

#### 1. Stack (Primitive Data Types)
* Primitive data types in JavaScript include number, string, boolean, undefined, null, symbol, and bigint.
* Call by value: When you assign or pass a primitive value, a copy of the value is created and stored on the stack.
* The stack is a structured memory region that is fast and efficient, used to store static data like function calls, variables, and references.
* If you pass a primitive data type to a function, the function receives a copy of that value, meaning changes to the value inside the function do not affect the original.
![alt text](image-01.png)
#### 2. Heap (Non-Primitive Data Types)
* Non-primitive data types include objects, arrays, functions, etc.
* Call by reference: When you assign or pass a non-primitive data type, what is actually passed is a reference to the location in memory (in the heap) where the data is stored.
* The heap is used for dynamic memory allocation, meaning large, more complex objects are stored here, and the stack holds the reference to the memory address in the heap.
* When you pass an object to a function or assign it to another variable, both variables share the same reference, meaning changes to one will affect the other.
![alt text](image-02.png)

![alt text](image-00.png)

