import tutorService from "../services/tutor.service";
import { Request, Response } from "express";

const findAllTutorsController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.findAllTutorsService());
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

const createTutorController = async (req: Request, res: Response) => {
  try {
    const corpo = {
      ...req.body,
    };
    res.send(await tutorService.createTutorService(corpo));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

const updateTutorController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.updateTutorService(req.params.id, req.body));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

const deleteTutorController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.deleteTutorService(req.params.id));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

const createPetTutorController = async (req: Request, res: Response) => {
  try {
    res
      .status(201)
      .send(
        await tutorService.createPetTutorService(req.params.tutorId, req.body)
      );
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente mais tarde" });
  }
};

const updatePetTutorController = async (req: Request, res: Response) => {
  try {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;
    
    const updatedPetData = req.body; 
    const updatedTutor = await tutorService.updatePetTutorService(tutorId, petId, updatedPetData);

    res.status(200).json(updatedTutor);
  } catch (error) {
    console.error("Erro ao atualizar o tutor:", error);
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
  }
};


export default {
  findAllTutorsController,
  createTutorController,
  updateTutorController,
  deleteTutorController,
  createPetTutorController,
  updatePetTutorController,
};
