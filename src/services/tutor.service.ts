import Tutor from "../models/tutor.model";

export const findAllTutorsService = () => {
  return Tutor.find();
};

export const createTutorService = (body: String) => {
  return Tutor.create(body);
};

export const updateTutorService = (id: String, body: String) => {
  return Tutor.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

export const deleteTutorService = (id: String) => {
  return Tutor.findByIdAndRemove(id);
};

export const createPetTutorService = (tutorId: String, pet: String) => {
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

export const updatePetTutorService = (
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

export const deletePetTutorService = async (id: string, petId: string) => {
  try {
    const updatedTutor = await Tutor.findOneAndUpdate(
      { _id: id },
      { $pull: { pets: { _id: petId } } },
      { new: true } 
    );

    return updatedTutor;
  } catch (error) {
    throw new Error(`Erro ao remover o pet: ${error}`);
  }
};