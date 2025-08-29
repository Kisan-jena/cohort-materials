# JavaScript Asynchronous Programming: Async/Await, Promises, and Comparisons

## Introduction
Asynchronous programming in JavaScript is essential for handling operations like fetching data from APIs, reading files, and executing background tasks without blocking the main thread. The primary tools for handling async operations are **Promises** and **Async/Await**.

---

## Promises
A **Promise** represents a value that may be available now, or in the future, or never. It has three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### Syntax
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating a condition
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});
```

### Handling Promises
```javascript
myPromise
  .then((message) => console.log(message)) // Executes on resolve
  .catch((error) => console.log(error))    // Executes on reject
  .finally(() => console.log("Execution completed"));
```

### Industrial Example: Fetching API Data
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Post title:", data.title))
  .catch(error => console.error("Error fetching data:", error));
```

---

## Async/Await
**Async/Await** provides a cleaner way to handle asynchronous code compared to Promises with `.then()` and `.catch()`.

### Syntax
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log("Post title:", data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
```

### Industrial Example: Handling Multiple API Calls
```javascript
async function fetchMultipleData() {
  try {
    let [user, post] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
    ]);
    console.log("User:", user.name);
    console.log("Post:", post.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchMultipleData();
```

---

## Comparison: Promises vs Async/Await

| Feature | Promises | Async/Await |
|---------|---------|-------------|
| Readability | More complex, uses `.then()` and `.catch()` | Cleaner and more readable |
| Error Handling | Requires `.catch()` | Uses `try/catch` for better error handling |
| Execution Flow | Chained `.then()` calls | Appears more like synchronous code |
| Best Use Case | When multiple chained operations are needed | When async code needs to be structured like sync code |

### Example Comparison
#### Using Promises
```javascript
function fetchDataPromise() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log("Post title:", data.title))
    .catch(error => console.error("Error fetching data:", error));
}
fetchDataPromise();
```

#### Using Async/Await
```javascript
async function fetchDataAsync() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log("Post title:", data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchDataAsync();
```

---

## When to Use Which?

### Use **Promises** When:
- You have multiple independent async operations that do not rely on each other.
- You need better compatibility with older codebases.

### Use **Async/Await** When:
- You need a cleaner and more synchronous-looking code structure.
- You are handling complex async workflows with error handling.

---

## Industrial Use Cases

### 1. **Fetching Data for Dashboards** (Real-time APIs)
**Use Case:** A stock trading platform needs to fetch real-time stock prices and news updates.
```javascript
async function getStockData() {
  let stockData = await fetch('https://api.example.com/stocks').then(res => res.json());
  console.log("Stock Price:", stockData.price);
}
getStockData();
```

### 2. **User Authentication and Session Management**
**Use Case:** A web app checks login credentials before fetching user details.
```javascript
async function loginUser(username, password) {
  let response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  let data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}
```

### 3. **Streaming Data (WebSockets)**
**Use Case:** A chat application needs to receive real-time messages.
```javascript
const socket = new WebSocket('wss://chat.example.com');
socket.onmessage = event => console.log("New message:", event.data);
```

### 4. **Parallel API Calls in E-commerce Platforms**
**Use Case:** Fetch product details and reviews at the same time to speed up page load.
```javascript
async function fetchProductPage(productId) {
  let [product, reviews] = await Promise.all([
    fetch(`/api/products/${productId}`).then(res => res.json()),
    fetch(`/api/products/${productId}/reviews`).then(res => res.json())
  ]);
  console.log("Product:", product.name);
  console.log("Reviews:", reviews);
}
```

---

## Conclusion
- **Promises** and **Async/Await** both handle asynchronous tasks efficiently.
- **Promises** work well for handling multiple independent operations.
- **Async/Await** improves readability and is better for sequential operations.
- **Choosing the right approach** depends on the complexity of the async task.

By mastering both approaches, developers can build efficient and responsive applications for industrial use cases like API fetching, authentication, WebSockets, and e-commerce platforms.

---

## Question & Answer Section

**Q1: What happens if we forget to use `.catch()` in a Promise?**  
A: If an error occurs and there is no `.catch()`, the Promise will remain unhandled, potentially causing issues like unhandled rejection warnings in the console.

**Q2: Can we use `await` inside a normal function?**  
A: No, `await` can only be used inside an `async` function. Otherwise, it results in a syntax error.

## Understanding `await` and Promises in JavaScript

### `await` is Not a Promise Itself
`await` is an operator that makes your async code wait for a promise to resolve (or reject). Here's why it uses promises:

### Promises Represent Asynchronous Results
Promises are JavaScript’s way of handling asynchronous operations. When you perform an async task (like fetching data), it returns a promise that will eventually settle (resolve with data or reject with an error).

### `await` Pauses Execution
When you write `await promise`, JavaScript pauses the async function until that promise settles. Once the promise is resolved, `await` returns the result, allowing you to work with the value as if it were synchronous.

### Syntactic Sugar for Promises
Using `await` helps simplify promise handling. Instead of chaining `.then()` callbacks, you can write more readable code that looks synchronous, even though it’s handling asynchronous operations under the hood.

### Example:
```javascript
async function fetchData() {
  // Imagine fetchPromise returns a promise from an API call.
  const data = await fetchPromise(); // Execution pauses here until fetchPromise resolves.
  console.log(data);
}
```

### Summary
`await` leverages promises to handle asynchronous operations, pausing execution in an `async` function until the promise is settled, and then returning the resolved value for further use.

## Understanding Async/Await in JavaScript

### Example Code
```javascript
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
```

### Step-by-Step Explanation
#### Calling an Async Function:
- When `asyncExample()` is called, it immediately returns a promise.
- The synchronous parts of the function start executing right away.

#### Execution Inside `asyncExample`:
1. The first statement inside the function logs `"Start of async function"`.
2. When execution reaches `await delay(1000)`, the function pauses. Under the hood:
   - The `delay(1000)` function creates a new promise that will resolve after 1 second (using `setTimeout`).
   - The `await` operator tells JavaScript to pause execution of `asyncExample` until that promise resolves.
   - While waiting, the rest of the code in the async function (i.e., `console.log("After delay in async function")`) is not executed immediately.

#### Returning Control to the Event Loop:
- After hitting `await`, the async function gives control back to the event loop. This means that the code outside the async function continues to run.
- In our example, `"End of script"` is logged immediately because it’s part of the synchronous code.

#### Resuming the Async Function:
- Once the promise returned by `delay(1000)` resolves (after 1 second), the rest of the `asyncExample` function is scheduled as a microtask.
- When the event loop is ready (i.e., after all synchronous code has finished), the microtask runs and logs `"After delay in async function"`.

### What Happens Under the Hood?
#### Async Functions Return Promises:
- Every `async` function implicitly returns a promise. In our case, `asyncExample()` returns a promise that resolves after all its code (including awaited parts) has been executed.

#### `await` and the Microtask Queue:
- The `await` operator causes the async function to suspend its execution until the promise is resolved.
- Once resolved, the remaining code of the async function is placed in the microtask queue, ensuring it runs right after the current call stack is empty.

### Event Loop Flow:
1. **Synchronous Execution:** All synchronous code (e.g., `console.log("Start of async function")` and `console.log("End of script")`) is executed immediately.
2. **Asynchronous Handling:** The asynchronous task (waiting for `delay(1000)`) happens in the background.
3. **Microtask Execution:** Once the promise from `delay` resolves, the async function’s continuation (the code after `await`) is executed as a microtask.

### Summary
- `async/await` is syntactic sugar over Promises.
- It makes asynchronous code easier to read and write, even though under the hood, it works with promises and the event loop.

## Flow of Execution

Synchronous code always runs first. When `await` is encountered, the async function pauses, the awaited promise resolves in the background, and then the async function resumes as soon as the call stack is clear.

You're absolutely right that `await` works similarly to `.then()`, but let's carefully analyze why "End of script" does not come first in your previous example.

### Understanding the Order of Execution

```js
async function asyncFunction() {
    await new Promise(resolve => resolve());  // Creates a microtask
    console.log("Async function log.");
}

function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    console.log("Heavy computation finished.");
}

asyncFunction();
heavyComputation();
```

### Step-by-Step Execution

1. `asyncFunction()` is called
    - The function is executed, and since it's an async function, it immediately returns a promise.
    
2. Inside `asyncFunction()`, `await new Promise(resolve => resolve());` is encountered.
    - This creates a microtask, but it does **not** block execution.
    - Since the promise is resolved immediately, `await` still pushes the remaining code of `asyncFunction` into the microtask queue.

3. `heavyComputation()` is called
    - This function runs synchronously and completely blocks the main thread for a significant amount of time.
    - The large loop runs to completion before anything else happens.
    - After it completes, `"Heavy computation finished."` is logged.

4. **Microtask Queue Executes (`asyncFunction()` resumes)**
    - After `heavyComputation()` finishes, the main thread is free.
    - The event loop now checks the microtask queue, which contains the remaining code from `asyncFunction()`.
    - `"Async function log."` is finally logged.

### Why Doesn't "End of script" Appear?

Your provided expected output:

```js
Start of async function
End of script
After delay in async function
```

This output is not from the provided code. It seems like you were expecting another `console.log("End of script");`, but your code doesn't have it.

If you want to see "End of script" appearing before the async function completes, modify the code like this:

```js
async function asyncFunction() {
    console.log("Start of async function");
    await new Promise(resolve => resolve());  // Creates a microtask
    console.log("Async function log.");
}

function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    console.log("Heavy computation finished.");
}

asyncFunction();
console.log("End of script");
heavyComputation();
```

### New Expected Output:

```js
Start of async function
End of script
Heavy computation finished.
Async function log.
```

### Why This Happens?

1. **`"Start of async function"`** logs immediately because it's synchronous inside `asyncFunction()`.
2. **`"End of script"`** logs next because `console.log("End of script");` is synchronous and executes before heavy computation starts.
3. **`"Heavy computation finished."`** logs because `heavyComputation()` runs synchronously.
4. **`"Async function log."`** logs last because it was inside a microtask that executes after the main thread is clear.

### Key Takeaways

- `await` pushes code execution to the **microtask queue**, which runs after all synchronous code.
- Your original code did not have `"End of script"`, which is why it didn't appear.
- If you add `"End of script"`, it appears before the async function completes because synchronous code always executes first.

Let me know if you have any questions! 🚀

---

### Example: Synchronous Code in an `async` Function

```js
async function example() {
    console.log("Step 1: Synchronous log inside async function");
    await new Promise(resolve => resolve());  // Creates a microtask
    console.log("Step 3: Async log after await");
}

console.log("Step 0: Start of script");
example();
console.log("Step 2: End of script");
```

### Output:

```js
Step 0: Start of script
Step 1: Synchronous log inside async function
Step 2: End of script
Step 3: Async log after await
```

### Explanation:

1. **`"Step 0: Start of script"`** logs first because it is synchronous.
2. **`"Step 1: Synchronous log inside async function"`** logs next because it's inside `example()`, but it is still synchronous.
3. **`await new Promise(resolve => resolve());`**
    - This creates a **microtask** and pauses the function until the promise resolves.
    - However, it does **not** block other synchronous code.
4. **`"Step 2: End of script"`** logs next because it is synchronous and runs before microtasks.
5. **`"Step 3: Async log after await"`** logs last because it was in the microtask queue and executed after all synchronous code finished.

### Key Rule:

- Any normal (synchronous) code inside an `async` function runs **immediately** when the function is called.
- **Only code after `await` is postponed** until the microtask queue runs.

# Async/Await vs .then()

## Understanding Async/Await

```javascript
async function asyncFunction() {
    await new Promise(resolve => resolve());  // Creates a microtask
    console.log("Async function log.");
}

function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    console.log("Heavy computation finished.");
}

asyncFunction();
heavyComputation();

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
```

## Using .then() Instead of Async/Await

```javascript
// A helper function that returns a promise that resolves after a specified time (in ms)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function asyncExample() {
  console.log("Start of async function");

  // Using .then() instead of await
  delay(1000).then(() => {
    console.log("After delay in async function");
  });
}

asyncExample();
console.log("End of script");
```

### Expected Output:
```plaintext
Start of async function
End of script
After delay in async function
```

### Explanation:
- "Start of async function" logs immediately when `asyncExample()` is called.
- `delay(1000)` creates a promise that resolves after 1 second.
- Since `delay(1000).then(...)` is asynchronous, the function does not wait and continues executing.
- "End of script" logs next because synchronous code runs first.
- After 1 second, the `.then()` callback runs and logs "After delay in async function".

## Key Takeaways:
- `await` pauses execution inside an async function.
- `.then()` does not pause execution but registers a callback to run when the promise resolves.
- Both approaches work the same way under the hood, but `async/await` makes code easier to read.

## Understanding Microtasks and Event Loop

```javascript
function asyncFunction() {
    return new Promise(resolve => resolve()) // Creates a microtask
        .then(() => {
            console.log("Async function log.");
        });
}

function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    console.log("Heavy computation finished.");
}

asyncFunction();
heavyComputation();
```

### Expected Output:
```plaintext
Heavy computation finished.
Async function log.
```

### Step-by-Step Explanation:
- `asyncFunction()` is called first, returning a resolved Promise, but `.then()` schedules its callback in the microtask queue.
- `heavyComputation()` is called and blocks the main thread until the loop finishes.
- Once `heavyComputation()` is done, the event loop picks up the microtask queue.
- The `.then()` callback executes after synchronous code completes, logging "Async function log.".

## Final Key Takeaways:
- `await` pauses execution inside an async function, while `.then()` just registers a callback.
- Microtasks (Promises) always execute after synchronous code, but before other async tasks (like `setTimeout`).
- Even though `asyncFunction()` is called first, its log runs after `heavyComputation()` because microtasks wait for the main thread to be free.

🚀 Happy Coding!

