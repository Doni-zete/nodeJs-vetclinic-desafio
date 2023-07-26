import tutorService from "../services/tutor.service";
import { Request, Response } from "express";

const findAllTutorsController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.findAllTutorsService);
  } catch (error) {}
};
export default {
  findAllTutorsController,
};
