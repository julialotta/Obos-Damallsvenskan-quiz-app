import express, { Router } from "express";
import { get_gameByIDController } from "../controllers/game.controller";

const router: Router = express.Router();

router.get("/", get_gameByIDController);
/* router.post("/newscore", post_newBookingsController);
router.get("/highscore", get_bookingByIdController); */

export default router;
