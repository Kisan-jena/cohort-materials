const express = require("express");
const routes = express();
routes.use(express.json());
routes.listen(3000);

const users = []; 

function tokengenerator() {
    const option = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = ""; 
    for (let i = 0; i < 32; i++) {
        token += option[Math.floor(Math.random() * option.length)];
    }
    return token;
}


routes.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    users.push({ username, pass });
    res.send({ message: "You have signed up" });
});

routes.post("/sign-in", (req, res) => {
    const username = req.body.username;
    const pass = req.body.pass;

    const user = users.find(u => u.username === username && u.pass === pass);

    if (user) {
        const token = tokengenerator();
        user.token = token;
        res.send({ token });
        console.log(users);
    } else {
        res.status(400).send({ message: "Invalid username or password" });
    }
});

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const user = users.find(u => u.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})