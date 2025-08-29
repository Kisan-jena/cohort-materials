//^ EXAMPLE 1
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age?: number;  // Optional
    address?: {     // Optional
        city: string;
        pin: number;
        country: string;
    };
}

// Defining a user object
let user: User = {
    firstName: "Kisan",
    lastName: "Jena",
    email: "kisan@example.com",
    age: 25,
};

// Destructuring with type inference (no need to annotate again) i.e, :User
let { firstName, lastName, email, age }  = user;

// OR  
// let { firstName, lastName, email, age }:User  = user;

// Function to check user data
const checkUser = (user: User): string => {
    return user.firstName === "Kisan" && user.age !== undefined && user.age >= 18 ? "Eligible" : "Not Eligible";
};
console.log(checkUser(user)); 

//^ EXAMPLE 2
interface Peoplee{
    Name: string,
    age: number, 
    address?: {     // Optional
        city: string;
        pin: number;
        country: string;
    },
    greet:(s:string)=>string 
}
let perosn:Peoplee={
    Name:'kisan',
    age:13,
    greet:(s)=>{
        return `heello ${s} iam kisan`
    }
}
console.log(perosn.Name)
console.log(perosn.age)
console.log(perosn.greet("rahul"))

//^ EXAMPLE 3 , with Classes

interface People{
    Name?: string,
    age?: number, 
    greet?:(s:string)=>string 
}

class Manager implements People {
    Name: string;
    age: number;
    id:string;

    constructor(Name: string, age: number) {
        this.Name = Name;
        this.age = age;
        this.id = "123"
    }

    // function ha yeh , in classs do need to write function greet(), use arrow fn or directly greet()
    greet(s: string): string {
        return `Hello ${s}, I am ${this.Name} my id is ${this.id}`;
    }
}

//* OR OPTIMISE FROM ABOVE 
// class Manager implements People {
//     id: string = "123"; // No need to repeat Name & age

//     constructor(public Name: string, public age: number) {} // Auto-assigns to `this`

//     greet = (s: string): string => `Hello ${s}, I am ${this.Name}, my id is ${this.id}`;


const manager1 = new Manager("Alice", 30);
console.log(manager1.greet("Bob")); 
console.log(manager1.Name);
console.log(manager1.age); 

//^ Abstract class in TS

abstract class Animal {
    abstract makeSound(a:Number): void;  // Abstract method (must be implemented in subclasses)
  
    move(): void {     // if i make move also abstarct then jo bhi animal use kar raha hai uska andar move function hone jaruri haui
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal { // TRY REMOVING MAKESOUND AND SEE ERROR 
    makeSound(a:Number): void {
      console.log(`${a} bhaauu bhauu!`);
    }
  }
  
  const dog = new Dog();
  dog.makeSound(2); // Output: Bark!
  dog.move();      // Output: Moving...
  

//   ^ union and intersection in interface (totally difff than type)

interface Dogg {
  age:number
  name:string
}

interface Cat {
  name:string
  colour:string
}

// Union → can be Dog OR Cat
type Pet = Dogg & Cat;

const p: Pet = {
  age: 5,
  name: "Milo",
  colour: "Black" // remove colour u will se error (for var "&(intersection) and |(union)" behace alag then FN)
};

const pet1 = (pet: Pet) => {
    console.log(pet.age); 
    //! chnage "type Pet = Dogg | Cat" then u cant do "console.log(pet.age)"
};


// Yes! 💡
// You just caught one of those “TypeScript quirks” — the difference in behavior when using & or | with variables vs. function parameters is all about how TypeScript checks compatibility.

// 1️⃣ Variables — direct assignment

// When you declare a variable as Dogg | Cat or Dogg & Cat:

// & (intersection) → must have all properties from both.

// | (union) → must match at least one of the types.

// type PetAnd = Dogg & Cat;
// const pet1: PetAnd = {
//   age: 3,
//   name: "Milo",
//   colour: "Black" // ✅ must have all
// };

// type PetOr = Dogg | Cat;
// const pet2: PetOr = { age: 3, name: "Milo" }; // ✅ OK (Dogg)
// const pet3: PetOr = { colour: "White", name: "Luna" }; // ✅ OK (Cat)

// 2️⃣ Function parameters

// When you pass something to a function, union parameters behave differently:

// For | (union) → inside the function, you can only access common properties (because TS can’t guarantee which type you got).

// For & (intersection) → inside the function, you can access all properties.

// type PetAnd = Dogg & Cat;
// type PetOr = Dogg | Cat;

// const printPetAnd = (pet: PetAnd) => {
//   console.log(pet.age);    // ✅ OK
//   console.log(pet.colour); // ✅ OK
// };

// const printPetOr = (pet: PetOr) => {
//   console.log(pet.name);   // ✅ OK (shared)
//   // console.log(pet.age); // ❌ Not safe — may be a Cat
// };

// Why different?

// Variable declaration → TS checks at assignment time whether the value satisfies the declared type.

// Function parameters with unions → Inside the function, the type is not yet known without narrowing.
// TypeScript plays it safe and only lets you touch properties that exist on every member of the union.

// If you want, I can make you a cheat sheet table comparing & vs | for:

// Variables

// Function parameters

// Return types

// It makes this "aha" moment much easier to remember.

// Exactly ✅ — this is the core mental model you need for TypeScript:

// A type is not just a bag of properties — it’s the set of all possible values that satisfy the rules you wrote.

// 1️⃣ Example: Type as a "set of values"

// Think of a type like a mathematical set:

// interface Dogg {
//   age: number;
//   name: string;
// }


// Dogg means:

// The set of all values that have at least a number age and a string name.

// So these all belong to the Dogg set:

// { age: 3, name: "Milo" }
// { age: 5, name: "Rex", colour: "black" } // ✅ still Dogg (extra props allowed)

// 2️⃣ Intersection (&)

// Mathematically: set intersection — only values that are in both sets.

// With Dogg & Cat, the value must be in both Dogg's set and Cat's set.

// That means it must have all properties from both.

// interface Cat {
//   name: string;
//   colour: string;
// }

// type Pet = Dogg & Cat;
// // The set of all values that have: age (number), name (string), colour (string)

// 3️⃣ Union (|)

// Mathematically: set union — any value that’s in either set.

// With Dogg | Cat, the value can be in Dogg's set OR Cat's set.

// Inside a function, TypeScript doesn’t know which set you got, so it only lets you use the properties common to all sets.

// type Pet = Dogg | Cat;
// // The set of all values that have: (Dogg's props) OR (Cat's props)

// 4️⃣ Why function & variable behavior feels different

// For variables, you already know the exact value when assigning → TS checks membership in the set immediately.

// For function parameters, you don’t know yet which subset the value belongs to → TS only guarantees the intersection of properties in all sets.

// If you want, I can draw a Venn diagram of value sets for & and | in TypeScript so you can literally "see" the math behind it.
// It makes this set-thinking super intuitive.