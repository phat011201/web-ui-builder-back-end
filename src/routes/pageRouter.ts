// Path: src/routes/pageRouter.ts

// import libraries
import express from "express";

// import controllers
import PageController from "../controllers/pageController";

// class PageRouter
class PageRouter {
  private router: express.Router;
  private pageController: PageController;

  constructor() {
    this.router = express.Router();
    this.pageController = new PageController();

    this.routers();
  }

  private routers() {
    this.router.get("/api/pages", this.pageController.getPage);
    this.router.post("/api/pages", this.pageController.setPage);
  }

  public getRouter(): express.Router {
    return this.router;
  }
}

export default new PageRouter().getRouter();
