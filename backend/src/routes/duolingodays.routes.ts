import express, { Router } from "express";
import { get_duolingoDays } from "../controllers/duolingo.controller";

const router: Router = express.Router();

router.get("/", get_duolingoDays);
/* router.post("/newscore", post_newBookingsController);
router.get("/highscore", get_bookingByIdController); */

export default router;
