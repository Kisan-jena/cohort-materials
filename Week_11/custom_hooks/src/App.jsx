import { useState } from 'react';

// Custom hook
function useCounter() {
  const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(function (c) { //     setCount(c => c + 1);
//         return c + 1;
//     });
// }
//^ above uisng arrow
  const increaseCount = () => {
    setCount(c=>c+ 1);
};

  return {
    count: count,
    increaseCount: increaseCount
  };
}

function App() {

  return (
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

function Counter(){
  const { count, increaseCount } = useCounter();
  return (
    <button onClick={increaseCount}>Increase {count}</button>
  )
}

export default App;


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//     // setCount((c) => c + 1); // Optional improvement
//   }

//   return (
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   );
// }

// export default App;
