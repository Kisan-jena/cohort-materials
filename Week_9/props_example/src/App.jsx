// Create a function component named App that will be rendered in the root element
function App() {
    // Array of post data (instead of hardcoded JSX)
    const posts = [
        {
            name: "Bharat",
            followerCount: 20,
            time: "2m ago",
            image: "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ",
            description: "Want to know how to win big? Check out how these folks won $6000 in bounties.",
        },
        {
            name: "Harkirat",
            followerCount: 30,
            time: "3m ago",
            image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
            description: "How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get hired in 2024.",
        },
        {
            name: "Deepak",
            followerCount: 50,
            time: "18m ago",
            image: "https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc",
            description: "Here is the roadmap to become a full-stack developer in 2024.",
        },
    ];

    return (
        <div style={appStyle}>
            <div style={containerStyle}>
                <div>
                    {/* Mapping through posts array and passing props dynamically */}
                    {posts.map((post, index) => (
                        <PostComponent
                            key={index}
                            name={post.name}
                            followerCount={post.followerCount}
                            time={post.time}
                            image={post.image}
                            description={post.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Reusable Style Objects
const appStyle = { backgroundColor: "#dfe6e9", height: "100vh" };
const containerStyle = { display: "flex", justifyContent: "center" };
const postStyle = {
    width: 500,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

// Post Component with props
// eslint-disable-next-line react/prop-types
function PostComponent({ name, followerCount, time, image, description }) {
    return (
        <div style={postStyle}>
            <div style={{ display: "flex" }}>
                <img src={image} alt="User" style={{ width: 40, height: 40, borderRadius: 20 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b>
                    <div>{followerCount} followers</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>{time}</div>
                        <img
                            src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                            alt="Clock"
                            style={{ width: 20, height: 15, marginLeft: 5 }}
                        />
                    </div>
                </div>
            </div>
            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
}

// Export App Component
export default App;
