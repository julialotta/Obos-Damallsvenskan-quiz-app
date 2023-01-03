import { Request, Response } from "express";

export const get_portfolioProjects = async (req: Request, res: Response) => {
  console.log(req);
  res.send(200);
};
export const get_portfolioProjectByID = async (req: Request, res: Response) => {
  console.log(req);
  res.send(200);
};
