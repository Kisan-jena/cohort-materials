// // ^ Reduce re render using memo

// import React, { createContext, useContext, useState, useMemo, memo } from 'react';

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);
  
//   // Memoize the context value to prevent unnecessary re-renders
//   const contextValue = useMemo(() => ({
//     count, 
//     setCount
//   }), [count]);

//   return (
//     <CountContext.Provider value={contextValue}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// // Memoized Parent component
// const Parent = memo(function Parent() {
//   return (
//     <CountContextProvider>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// });

// // Memoized Decrease component
// const Decrease = memo(function Decrease() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
// });

// //  Memoized Increase component (fixed typo in component name)
// const Increase = memo(function Increase() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
// });

// //  Memoized Value component
// const Value = memo(function Value() {
//   const {count} = useContext(CountContext);
//   return <p>Count: {count}</p>;
// });

// // /zMemoized App Component
// const App = memo(() => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// });

// export default App;

// // ^ Normal with so un usal re render

// import React, { createContext, useContext, useState } from 'react';

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{count, setCount}}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Incrase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Decrease() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count=>count-1)}>Decrease</button>;
// }

// function Incrase() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count=>count+1)}>Increase</button>;
// }

// function Value() {
//   const {count} = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

// // ^ Reduce re render using recoil

// import React, { createContext, useContext, useState } from 'react';
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// import './App.css';

// const count = atom({
//   key: 'countState', // unique ID (with respect to other atoms/selectors)
//   default: 0, // default value (aka initial value)
// });

// function Parent() {
//   return (
//     <RecoilRoot>
//       <Increase />
//       <Decrease />
//       <Value />
//     </RecoilRoot>
//   );
// }

// function Decrease() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(c => c - 1)}>Decrease</button>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
// }

// function Value() {
//   const countValue = useRecoilValue(count);
//   return <p>Count: {countValue}</p>;
// }

// // App Component
// const App = () => {
//   return (
//     <div className="container">
//       <h1>Recoil Counter Example</h1>
//       <Parent />
//     </div>
//   );
// };

// export default App;

