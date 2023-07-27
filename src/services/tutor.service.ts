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

const deleteTutorService = (id: String) => {
  return Tutor.findByIdAndRemove(id);
};

const createPetTutorService = (id: String, pet: String) => {
  return Tutor.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        pets: pet,
      },
    },
    {
      includeResultMetadata: true,
    }
  );
};

export default {
  findAllTutorsService,
  createTutorService,
  updateTutorService,
  deleteTutorService,
  createPetTutorService,
};
