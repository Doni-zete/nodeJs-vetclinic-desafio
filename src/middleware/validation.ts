import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const validationTutor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let erros = [];

  if (!req.body.name) {
    erros.push("name");
  }
  if (!req.body.phone) {
    erros.push("phone");
  }
  if (!req.body.email) {
    erros.push("email");
  }
  if (!req.body.date_of_birth) {
    erros.push("date_of_birth");
  }
  if (!req.body.zip_code) {
    erros.push("zip_code");
  }

  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros}, devem ser preenchido!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros}, deve ser preenchido!` });
    }
  }
};

export const validationPet = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let erros = [];

  if (!req.body.name) {
    erros.push("name");
  }
  if (!req.body.species) {
    erros.push("species");
  }
  if (!req.body.weight) {
    erros.push("weight");
  }

  if (!req.body.carry) {
    erros.push("carry");
  }
  if (!req.body.date_of_birth) {
    erros.push("date_of_birth");
  }

  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros}, devem ser preenchido!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros}, deve ser preenchido!` });
    }
  }
};


