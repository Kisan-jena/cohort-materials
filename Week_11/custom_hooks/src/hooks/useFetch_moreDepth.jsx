import { useState, useEffect } from "react";

function useFetchnew(url) {
  const [finalData, setFinalData] = useState({}); // Default to {} instead of null

  async function getDetails() {
      const response = await fetch(url); // Fetch data
      const json = await response.json();
      setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]); // Add url as a dependency

  return finalData ;
  // ^ try below code , if we use this then in useFetch_ex.js function we have to write{JSON.stringify(post.finalData.title, null, 2)} instead of {JSON.stringify(post.title, null, 2)} 
  // return {finalData}
}

export default useFetchnew;
