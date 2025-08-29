import { useRef, useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Directly using useRef

  useEffect(() => {
    prevCountRef.current = count; // Manually update the ref after render
  }, [count]); // Updates when count changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with useRef</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App;
