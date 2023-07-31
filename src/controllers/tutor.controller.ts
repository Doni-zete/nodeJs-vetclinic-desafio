import * as tutorService from "../services/tutor.service";
import { Request, Response } from "express";

export const findAllTutorsController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.findAllTutorsService());
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

export const createTutorController = async (req: Request, res: Response) => {
  try {
    const corpo = {
      ...req.body,
    };

    res.status(201).send(await tutorService.createTutorService(corpo));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

export const updateTutorController = async (req: Request, res: Response) => {
  try {
    res.send(await tutorService.updateTutorService(req.params.id, req.body));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

export const deleteTutorController = async (req: Request, res: Response) => {
  try {
    const delletedTutor = await tutorService.deleteTutorService(req.params.id);

    if (delletedTutor == null) {
      res.status(404).send(`Tutor não encontrado, tente novamente!`);
    } else {
      res.status(200).send(`Sucesso, tutor deletado!`);
    }
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

export const createPetTutorController = async (req: Request, res: Response) => {
  try {
    const tutorId = req.params.tutorId;
    const corpo = req.body;

    const createPetTutor = await tutorService.createPetTutorService(
      tutorId,
      corpo
    );

    if (!createPetTutor) {
      res.status(404).send({ message: "Tutor não encontrado." });
      return;
    }

    res.status(200).send({ id: tutorId, ...corpo });
    console.log(createPetTutor);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente mais tarde" });
  }
};

export const updatePetTutorController = async (req: Request, res: Response) => {
  try {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;
    const updatedPetData = req.body;

    const updatedPet = await tutorService.updatePetTutorService(
      tutorId,
      petId,
      updatedPetData
    );
    if (!updatedPet) {
      res
        .status(404)
        .send({ message: "Pet não encontrado para o tutor especificado." });
      return;
    }

    res.status(200).send({ id: petId, ...updatedPetData });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente mais tarde" });
  }
};

export const deletePetTutorController = async (req: Request, res: Response) => {
  try {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;

    const deletedPet = await tutorService.deletePetTutorService(tutorId, petId);

    if (!deletedPet || (deletedPet.pets && deletedPet.pets.length === 0)) {
      res
        .status(404)
        .send({ message: "Pet não encontrado para o tutor especificado." });
    } else {
      res.status(200).send({ message: "Sucesso, Pet deletado do tutor!" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente mais tarde" });
  }
};
