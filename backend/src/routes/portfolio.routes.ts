import express, { Router } from "express";
import {
  get_portfolioProjectByID,
  get_portfolioProjects,
} from "../controllers/portfolio.controller";

const router: Router = express.Router();

router.get("/", get_portfolioProjects);
router.get("/:id", get_portfolioProjectByID);
/* router.post("/newscore", post_newBookingsController);
router.get("/highscore", get_bookingByIdController); */

export default router;
