import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PhotographyService } from "./photography.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

// Get All Photographys
const getAllPhotographys = catchAsync(async (req: Request, res: Response) => {
  const result = await PhotographyService.getAllPhotographys();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Photographys Retrieved Successfully",
    data: result,
  });
});

// Get Photography details
const getPhotographysDetails = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PhotographyService.getPhotographysDetails(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Photography Details Retrieved Successfully",
      data: result,
    });
  }
);

export const PhotographysController = {
  getAllPhotographys,
  getPhotographysDetails,
};
