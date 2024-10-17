"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotographysRouter = void 0;
const express_1 = __importDefault(require("express"));
const photography_controller_1 = require("./photography.controller");
const router = express_1.default.Router();
router.get("/getAllPhotographys", photography_controller_1.PhotographysController.getAllPhotographys);
router.get("/getPhotographysDetails/:id", photography_controller_1.PhotographysController.getPhotographysDetails);
exports.PhotographysRouter = router;
