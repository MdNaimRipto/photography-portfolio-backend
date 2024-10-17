import express from "express";
import { PhotographysRouter } from "../modules/photography/photography.router";

const router = express.Router();

const routes = [
  {
    path: "/photography",
    route: PhotographysRouter,
  },
];

routes.map(r => router.use(r.path, r.route));

export const Routers = router;
