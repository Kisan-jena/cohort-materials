//*  simplfy version of promise
function waitforsec(resolve){
    setTimeout(resolve,1000)
}

function setTimeoutPromisified() {
    return new Promise(waitforsec);
}
  
function main() {
      console.log('main is called');
}
  
setTimeoutPromisified().then(main);

//* promisified version 1
function setTimeoutPromisified2(ms) {
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
  }
  
function callback() {
      console.log("3 seconds have passed");
}

setTimeoutPromisified2(3000).then(callback)

//* promisified version 2
function setTimeoutPromisified2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function callback() {
      console.log("3 seconds have passed");
}
  
setTimeoutPromisified2(3000).then(callback)

console.log('first mai')
  

