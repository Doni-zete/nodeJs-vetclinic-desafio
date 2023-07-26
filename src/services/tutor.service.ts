import Tutor from "../models/tutor.model";

const findAllTutorsService = () => {
  return Tutor.find();
};

const createTutorService = (body: String) => {
  return Tutor.create(body);
};

export default {
  findAllTutorsService,
  createTutorService
};
