const printSum=(fn:(a:number,b:number) => number):string=>{
    return `sum is ${fn(3,5)}`
}

const sum=(a:number,b:number):number=>{
    return a+b
}

printSum(sum)
console.log(sum(6,5))



