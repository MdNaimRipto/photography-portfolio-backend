import { model, Schema } from "mongoose";
import { IPhotography } from "./photography.interface";

const photographySchema = new Schema<IPhotography>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Photographys = model<IPhotography>(
  "Photographys",
  photographySchema
);
