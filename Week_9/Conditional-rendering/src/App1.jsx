// ^ EXAMPLE OF USE STATE

import { useState } from 'react';
// Create a function component named App that will be rendered in the root element
function App() {
  // return JSX that will be rendered
  return (
    <div style={{background:'#dfe6e9',height:"100vh"}}>
        <ToggleMessage/>
    </div>
  )
}



const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // defining a new state var

  return (
      <div>
          <button onClick={() => setIsVisible(!isVisible)}>
              Toggle Message
          </button>
          {isVisible && <p>This message is conditionally rendered!</p>}
      </div>
  );
};

export default App