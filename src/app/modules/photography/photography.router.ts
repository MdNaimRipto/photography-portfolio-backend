import express from "express";
import { PhotographysController } from "./photography.controller";

const router = express.Router();

router.get("/getAllPhotographys", PhotographysController.getAllPhotographys);

router.get(
  "/getPhotographysDetails/:id",
  PhotographysController.getPhotographysDetails
);

export const PhotographysRouter = router;
