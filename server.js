import { Server } from "cloudlink";

// Create a new Cloudlink server
const server = new Server({
  port: process.env.PORT || 3000, // Render will set PORT for you
  verbose: true
});

console.log("Cloudlink server is running...");
