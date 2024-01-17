// Path: src/server.ts

// import Server
import Server from "./server";

// create server
const server = new Server();


// set port
server.config({ port: process.env.PORT ?? 6868 });

// start server
server.start();
