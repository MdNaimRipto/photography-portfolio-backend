"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const photography_router_1 = require("../modules/photography/photography.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/photography",
        route: photography_router_1.PhotographysRouter,
    },
];
routes.map(r => router.use(r.path, r.route));
exports.Routers = router;
