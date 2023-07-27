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

const deleteTutorService =(id:String)=>{
  return Tutor.findByIdAndRemove(id);
}

export default {
  findAllTutorsService,
  createTutorService,
  updateTutorService,
  deleteTutorService
};
