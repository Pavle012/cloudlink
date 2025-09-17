import { WebSocketServer } from "ws";

const port = process.env.PORT || 3000;
const wss = new WebSocketServer({ port });

console.log(`✅ Cloudlink server running on port ${port}`);

wss.on("connection", ws => {
  console.log("🔌 New client connected");
  ws.on("message", msg => {
    // Broadcast messages to everyone
    for (const client of wss.clients) {
      if (client.readyState === 1) {
        client.send(msg);
      }
    }
  });
  ws.on("close", () => console.log("❌ Client disconnected"));
});
