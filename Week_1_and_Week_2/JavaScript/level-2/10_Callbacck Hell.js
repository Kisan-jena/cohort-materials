//* example of call back hell

// Callbacks
setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hello");
      setTimeout(function () {
        console.log("hello there");
      }, 5000);
    }, 3000);
  }, 1000);
  
// Promisified
function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });
  