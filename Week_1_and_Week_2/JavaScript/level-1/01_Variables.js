const accountId=13242
let accoun_email='kisanjena@40gmail.com'
var pass='2345'  //^ Dont use var, bcoz issue in block scope and functional scope
account_City='mumbai'
let something_undefined;

accoun_email='@new'
account_City='delhi'
pass='1232'

console.log(accountId);
console.log(accountId,accoun_email,account_City,pass,something_undefined)
console.table([accountId,accoun_email,account_City,pass,something_undefined])

