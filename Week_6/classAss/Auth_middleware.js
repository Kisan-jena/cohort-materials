const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const routes = express();
routes.use(express.json());
routes.listen(3000);

routes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "App.html"));  // Corrected path to App.html
});
routes.use(express.static(path.join(__dirname, "classAss")));

const users = [];
const JWT_SECRET = "USER_APP";

// Middleware to authenticate requests
function auth(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    
    try {
        const userDetails = jwt.verify(token, JWT_SECRET);
        req.username = userDetails.username;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token, authorization denied" });
    }
}

// Sign-up route
routes.post("/sign-up", (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    users.push({ username, password });
    res.json({ message: "You have signed up successfully" });
});

// Sign-in route
routes.post("/sign-in", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ 
            username: user.username 
        },JWT_SECRET, { 
            expiresIn: "1h" 
        });
        res.json({ token });
        console.log(token);
    } else {
        res.status(400).send({ message: "Invalid username or password" });
    }
});

// Protected route
routes.get("/me", auth, (req, res) => {
    const currentUser = req.username;
    const user = users.find(u => u.username === currentUser);

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        });
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
});
