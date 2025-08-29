import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  // eslint-disable-next-line react/jsx-key
  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  const addPost = () => {
    setPosts([...posts,
      {
        name: "Harkirat",
        subtitle: "10,000 followers",
        time: "2m ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "Want to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  };

  return (
    <div style={styles.app}>
      <h2 style={styles.heading}>📢 Social Feed</h2>
      <button style={styles.button} onClick={addPost}>➕ Add Post</button>
      <div style={styles.postContainer}>
        <div>
        {postComponents}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    background: "#f5f5f5",
    minHeight: "100vh",
    minWidth:"100vh",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    background: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  postContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  noPosts: {
    fontSize: "18px",
    color: "#7f8c8d",
    fontStyle: "italic",
  },
};

export default App;
