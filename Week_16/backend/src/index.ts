import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function(socket: WebSocket) {
    console.log("user connected");

    socket.on("message", (e) => {
        const message = e.toString();
        console.log("Received message:", message);
        
        // Handle different message types
        if (message === "ping") {
            console.log("Sending pong back to client");
            socket.send("pong");
        } else if (message === "Hello Server!") {
            socket.send("Hello Client! Welcome to the chat!");
        } else {
            // Echo the message back with a prefix
            socket.send(`Server received: ${message}`);
        }
    });
});

console.log("WebSocket server running on port 8080");
