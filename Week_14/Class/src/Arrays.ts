let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

const skills: readonly string[] = ["TypeScript", "React", "Node.js"];
// skills.push("Python"); ❌ Error: Readonly array cannot be modified

interface Employe2 {
    id: number;
    name: string;
    position: string;
  }
  
let employees: Employe2[] = [
    { id: 1, name: "Alice", position: "Developer" },
    { id: 2, name: "Bob", position: "Designer" },
  ];


//^ Ex 2

interface Users{
    name:string,
    age:number,
    height:string
}

let usersData:Users[]=[
    {name:"kisan",age:12,height:'12'},
    {name:'rahul',age:19,height:'22'},
    {height:'12',age:22,name:'kian'}
]

const legal=(Myuser:Users[])=>{
    const legaluserdata=Myuser.filter(user=>user.age>18)
    return legaluserdata
}

console.log(legal(usersData))