import Tutor from "../models/tutor.model";

const findAllTutorsService = (id: String) => {
  return Tutor.find();
};

export default {
  findAllTutorsService,
};
