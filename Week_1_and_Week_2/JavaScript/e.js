// A helper function that returns a promise that resolves after a specified time (in ms)
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  
async function asyncExample() {
    console.log("Start of async function");
  
    // await pauses the function until the delay promise resolves
    await delay(1000); // waits for 1 second
  
    console.log("After delay in async function");
}
  
asyncExample();
console.log("End of script");
  