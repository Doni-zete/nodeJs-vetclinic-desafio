import Tutor from "../models/tutor.model";

const findAllTutorsService = () => {
  return Tutor.find();
};

const createTutorService = (body: String) => {
  return Tutor.create(body);
};

const updateTutorService = (id: String, body: String) => {
  return Tutor.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

export default {
  findAllTutorsService,
  createTutorService,
  updateTutorService,
};
