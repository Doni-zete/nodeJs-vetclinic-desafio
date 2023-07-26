import tutorService from "../services/tutor.service";
import { Request, Response } from "express";

const findAllTutorsController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.findAllTutorsService());
  } catch (error) {
    res.status(500).send({ message: String });
    console.log(`Erro inesperado, tente novamente ${error}`);
  }
};

const createTutorController = async (req: Request, res: Response) => {
  try {
    const corpo = {
      ...req.body,
    };
    res.send(await tutorService.createTutorService(corpo));
  } catch (error) {
    res.status(500).send({ message: String });
    console.log(`Erro inesperado, tente novamente ${error}`);
  }
};

export default {
  findAllTutorsController,
  createTutorController,
};
