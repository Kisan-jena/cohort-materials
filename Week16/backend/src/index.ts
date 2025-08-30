import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function(socket: WebSocket) {
    console.log("user connected");

    socket.on("message", (e) => {
        if (e.toString() === "Hello Server!") {
            console.log(e.toString());
            socket.send("pong");
        }
    });
});

console.log("WebSocket server running on port 8080");
