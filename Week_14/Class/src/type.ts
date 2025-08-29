type FullTimeEmployee = {
    name: string;
    salary: number;
    benefits: string[];
};
  
type ContractEmployee = {
    name: string;
    hourlyRate: number;
    contractEnd: Date;
};
  
type Intern = {
    name: string;
    school: string;
    duration: number; // in months
};
  
  // Union type: An employee can be either FullTime, Contract, or Intern
type Employee = FullTimeEmployee | ContractEmployee | Intern;
  
function getEmployeeDetails(emp: Employee) {
    console.log(`Name: ${emp.name}`);
  
    if ("salary" in emp) {
      console.log(`Salary: ${emp.salary}`);
      console.log(`Benefits: ${emp.benefits.join(", ")}`);
    } else if ("hourlyRate" in emp) {
      console.log(`Hourly Rate: ${emp.hourlyRate}`);
      console.log(`Contract Ends: ${emp.contractEnd.toDateString()}`);
    } else {
      console.log(`School: ${emp.school}`);
      console.log(`Internship Duration: ${emp.duration} months`);
    }
}
  
const emp1: FullTimeEmployee = { name: "Alice", salary: 70000, benefits: ["Health", "401k"] };
const emp2: ContractEmployee = { name: "Bob", hourlyRate: 50, contractEnd: new Date("2025-06-30") };
const emp3: Intern = { name: "Charlie", school: "MIT", duration: 6 };
const emppppp=2

getEmployeeDetails(emp1);
getEmployeeDetails(emp2);
getEmployeeDetails(emp3);

type Manager2 = {
    name: string;
    department: string;
    manageEmployees: () => void;
};
  
type Developer = {
    name: string;
    programmingLanguages: string[];
    writeCode: () => void;
};

// Interscetion: if intersection used then both type shoudl be there in tL
type TechLead = Manager2 & Developer;
  
const techLead: TechLead = {
    name: "David",
    department: "Engineering",
    programmingLanguages: ["TypeScript", "Python"],
    manageEmployees: () => console.log("Managing team..."),
    writeCode: () => console.log("Writing code..."),
};
  
console.log(techLead.name); // Valid
techLead.manageEmployees(); // Output: Managing team...
techLead.writeCode();       // Output: Writing code...
  