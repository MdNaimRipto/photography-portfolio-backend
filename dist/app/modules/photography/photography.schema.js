"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photographys = void 0;
const mongoose_1 = require("mongoose");
const photographySchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    serviceName: { type: String, required: true },
    serviceTakerName: { type: String, required: true },
    serviceCardImage: { type: String, required: true },
    serviceCardDescription: { type: String, required: true },
    serviceDescription: [{ type: String, required: true }],
    images: [
        {
            img: { type: String, required: true },
            masonry: { type: String, required: true },
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Photographys = (0, mongoose_1.model)("Photographys", photographySchema);
