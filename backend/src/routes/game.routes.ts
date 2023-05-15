import express, { Router } from "express";
import {
  get_scoreByGameID,
  set_scoreByGameID,
  get_allScores,
} from "../controllers/game.controller";

const router: Router = express.Router();

router.get("/", get_allScores);
router.get("/:id", get_scoreByGameID);
router.post("/newscore", set_scoreByGameID);

export default router;
