const express = require("express");
const jwt = require("jsonwebtoken");

const routes = express();
routes.use(express.json());
routes.listen(3000);

const users = []; 
const JWT_SECRET = "USER_APP";

routes.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    users.push({ username, pass });
    res.json({ message: "You have signed up" });
});

routes.post("/sign-in", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    const user = users.find(u => u.username === username && u.pass === pass);

    if (user) {
        const token = jwt.sign({username},JWT_SECRET);
        users.token=token
        res.json({token})
        console.log(token)
    }
    else {
        res.status(400).send({ message: "Invalid username or password" });
    }
});

routes.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    const user = users.find(u => u.username === username);
    
    if (user) {
        res.json({
            username: user.username,
            pass: user.pass
        })
    } else {
        res.status(401).send({message: "Unauthorized"})
    }
})