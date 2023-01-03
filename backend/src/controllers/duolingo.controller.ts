import { Request, Response } from "express";

export const get_duolingoDays = async (req: Request, res: Response) => {
  console.log(req);
  res.send("duolingo days");
};
