import httpStatus from "http-status";
import { IPhotography } from "./photography.interface";
import { Photographys } from "./photography.schema";

const getAllPhotographys = async (): Promise<IPhotography[]> => {
  const result = await Photographys.find();
  return result;
};

const getPhotographysDetails = async (
  id: string
): Promise<IPhotography | null> => {
  const result = await Photographys.findById({ _id: id });
  return result;
};

export const PhotographyService = {
  getAllPhotographys,
  getPhotographysDetails,
};
