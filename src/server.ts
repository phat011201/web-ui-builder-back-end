// Path: src/server.ts

// import libraries
import express from "express";
import dotenv from "dotenv";

// import routers
import pageRouters from "./routes/pageRouter";

// class Server
export default class Server {
  private app: express.Application;
  private port?: number | string;

  constructor() {
    this.app = express();
    dotenv.config();

    this.config({});
    this.middlewares();

    this.router();
  }

  public config({ port }: { port?: number | string }) {
    this.port = port || 6868;
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private router() {
    this.app.use("/", pageRouters);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
