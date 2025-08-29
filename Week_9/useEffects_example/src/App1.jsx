//^ useEffects dependency array
import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${currentTab}`)
      .then((res) => res.json())
      .then((json) => {
        setTabData(json);
        setLoading(false);
      });
  }, [currentTab]); //^ (dependency array) Refetch on tab change

  return (
    <div>
      {[1, 2, 3, 4].map((tabNumber) => (
        <button
          key={tabNumber}
          onClick={() => setCurrentTab(tabNumber)}
          style={{ color: currentTab === tabNumber ? "red" : "black" }}
        >
          Todo #{tabNumber}
        </button>
      ))}

      <br />
      {loading ? (<p>Loading...</p>) : tabData ? (
        <div>
          <h3>Todo Details</h3>
          <p><strong>ID:</strong> {tabData.id}</p>
          <p><strong>Title:</strong> {tabData.title}</p>
          <p><strong>Completed:</strong> {tabData.completed ? "✅ Yes" : "❌ No"}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
 