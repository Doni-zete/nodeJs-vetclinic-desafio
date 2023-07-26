import { Schema, model } from "mongoose";

const TutorSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, require: true },
  email: { type: String, required: true },
  date_of_birth: { type: Date },
  zip_code: {type: String, required: true}
});

const Tutor = model("Tutors", TutorSchema);

export default Tutor;
