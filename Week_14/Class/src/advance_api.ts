interface user{
    name:string,
    age:number;
}

const sumofage=(user:user[]):number=>{
    return user.reduce((total,user)=>total+user.age,0)
}

const usse:user[]=[
    {name:'kisanjena',age:18},
    {name:'annjnu',age:18}
]

console.log(sumofage(usse))

//^ #1 Pick- (if there are to many type checks in inteface and want to use some then )

interface userss{
    name:string,
    age:number;
    email:string;
    mobo:number;
    add:string
}

type Age=Pick<userss, "age" | 'name'>

const sumofage2=(users:Age[])=>{
    const names = users.map(user => user.name).join(' and ');
    const totalAge = users.reduce((total, user) => total + user.age, 0);
    let ageCount=0
    for(let i=0;i<users.length;i++){
        ageCount=ageCount+users[i].age
    }
    return `total age of ${names} is ${totalAge} and ageCount is ${ageCount}`;
}
console.log(sumofage2(usse))

//^ #2 Partial - (jo hm "?" <- iske help se karta h wahi same chiz via using partial)

type updateUser=Partial<userss>

const update=(users:updateUser[])=>{
    }

//^ #3 Read only (cant edit)

interface thrid {
    readonly name: string
}
const three: thrid = { name: "kisan" }
//* three.name='sahrman'  (show rerror)

//^ #4  Records - key value k liye

type userage1={ 
    [key:string]:number
}
type userage2=Record<string,number>

const users:userage2={ //* u can use userage1 or userage2
    'asjbcasjcbas':22
}

//^ Map - js concept - for key value

const userMap = new Map<string, number>();
userMap.set("kisan", 25);
userMap.set("anju", 30);
userMap.set("rahul", 22);


console.log(userMap.get("kisan"));
console.log(userMap.has("kisan")); 
console.log(userMap.size); 
userMap.delete("rahul");
console.log(userMap.size); 
// Clearing all entries
// userMap.clear();

// ^ Exclude - opposite to pick

// Define status types
type RequestStatus = "pending" | "success" | "error" | "cancelled" | "timeout";
type ActiveStatus = Exclude<RequestStatus, "success" | "error">;

function handleActiveRequest(status: ActiveStatus) {
    console.log(`Request is ${status}`);
}

handleActiveRequest("pending"); 


//^ Type inference zod

import { z } from 'zod';

// 1. Basic schema definition
const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email()
});

// 2. Type inference - TypeScript automatically infers the type
type User = z.infer<typeof UserSchema>;
// User is automatically: { name: string; age: number; email: string; }

// 3. Validation with type safety
const validateUser = (data: unknown): User => {
    return UserSchema.parse(data); // Throws error if invalid
};

// 4. Safe parsing (doesn't throw, returns result object)
const safeValidateUser = (data: unknown) => {
    const result = UserSchema.safeParse(data);
    
    if (result.success) {
        console.log("Valid user:", result.data); // result.data is typed as User
        return result.data;
    } else {
        console.log("Validation errors:", result.error.errors);
        return null;
    }
};

// 5. Usage examples
const validData = {
    name: "Kisan",
    age: 25,
    email: "kisan@example.com"
};

const invalidData = {
    name: "Kisan",
    age: "25", // Wrong type - should be number
    email: "invalid-email" // Invalid email format
};

// Test valid data
try {
    const user = validateUser(validData);
    console.log("User created:", user.name); // TypeScript knows user.name exists
} catch (error) {
    console.log("Validation failed:", error);
}

// Test invalid data with safe parsing
safeValidateUser(invalidData);

// 6. Advanced schema with optional fields
const UserWithOptionalSchema = z.object({
    name: z.string(),
    age: z.number().min(0).max(120),
    email: z.string().email(),
    phone: z.string().optional(), // Optional field
    isActive: z.boolean().default(true) // Default value
});

type UserWithOptional = z.infer<typeof UserWithOptionalSchema>;
// Automatically inferred as: { name: string; age: number; email: string; phone?: string; isActive: boolean; }

// 7. Array validation
const UsersArraySchema = z.array(UserSchema);
type UsersArray = z.infer<typeof UsersArraySchema>; // User[]

const usersData = [
    { name: "Kisan", age: 25, email: "kisan@example.com" },
    { name: "Anju", age: 30, email: "anju@example.com" }
];

const validatedUsers = UsersArraySchema.parse(usersData);
console.log("Validated users:", validatedUsers);