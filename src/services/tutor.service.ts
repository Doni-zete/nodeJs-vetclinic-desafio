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

const createPetTutorService = (tutorId: String, pet: String) => {
  return Tutor.findOneAndUpdate(
    {
      _id: tutorId,
    },
    {
      $push: {
        pets: pet,
      },
    },
    {
      new: true,
    }
  );
};

const updatePetTutorService = (
  tutorId: String,
  petId: String,
  updatedPetData: String
) => {
  const { ...updatedPetDataWithoutId } = updatedPetData;

  return Tutor.findOneAndUpdate(
    { _id: tutorId, "pets._id": petId },
    { $set: { [`pets.$`]: { _id: petId, ...updatedPetDataWithoutId } } },
    { new: true }
  );
};

export default {
  findAllTutorsService,
  createTutorService,
  updateTutorService,
  deleteTutorService,
  createPetTutorService,
  updatePetTutorService,
};
