import { Request, Response } from "express";

export const get_gameByIDController = async (req: Request, res: Response) => {
  console.log(req);
  res.send(200);
};
