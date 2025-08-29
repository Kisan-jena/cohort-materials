import  "react";  // Fix import
import useFetchnew from "./hooks/useFetch_moreDepth.jsx"; // Fix import
import { useState } from "react";

function App() {
  const [curentPost,setcurentPost]=useState(1)
  const post = useFetchnew("https://jsonplaceholder.typicode.com/posts/1"+curentPost);

  return (
    <div>
      <button onClick={()=>setcurentPost(1)} >1</button>
      <button onClick={()=>setcurentPost(3)} >3</button>
      <button onClick={()=>setcurentPost(2)} >2</button>
      <h1>Post Title:</h1>
      <pre>{JSON.stringify(post.title, null, 2)}</pre> {/* Fix JSON.stringify */}
    </div>
  );
}

export default App;



// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//     const [post, setPost] = useState({});

//     async function getPosts() {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//             const json = await response.json();
//             setPost(json);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     useEffect(() => {
//         getPosts();
//     }, []);

//     return (
//         <div>
//             <h1>Post Title: {post.title}</h1>
//             <p>{post.body}</p>
//         </div>
//     );
// }

// export default App;
