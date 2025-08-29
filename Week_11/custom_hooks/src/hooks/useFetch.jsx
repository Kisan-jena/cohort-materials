import { useState,useEffect } from "react";

export function useFetch(){
    const [post, setPost] = useState({});
    function getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then(response => response.json()) // Convert response to JSON
          .then(json => {
              setPost(json); // Update state with fetched data
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
        }
        useEffect(() => {
            getPosts();
        }, []);
        
        return post
}