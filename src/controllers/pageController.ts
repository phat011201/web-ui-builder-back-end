// Path: src/controllers/pageController.ts

// import libraries
import { Request, Response } from "express";

// import serives
import PageService from "../services/pageService";
import IComponent from "../interfaces/IPage";

const pageService = new PageService();

// class PageController
export default class PageController {
  constructor() {}

  // get Page
  public getPage(req: Request, res: Response) {
    try {
      const page = pageService.getPage();
      res.status(200).send(page);
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  // set Page
  public setPage(req: Request, res: Response) {
    const data: IComponent = req.body;

    try {
      pageService.setPage(data);
      res.status(200).send("Page updated");
    } catch (err: any) {
      res.status(500).json({ err: err.message });
    }
  }
}
