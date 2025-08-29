import { useState, createContext, useContext } from "react";

// Create a Context for the bulb state
const BulbContext = createContext();

function App() {
  
  return (
    <BulbProvider>
      <div>
        <LightBulb />
      </div>
    </BulbProvider>
  );
}

// Context Provider Component
// eslint-disable-next-line react/prop-types
function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);

  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn((currentState) => !currentState);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
