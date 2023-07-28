import { Schema, model } from "mongoose";

interface Tutor {
  name: String;
  phone: String;
  email: String;
  date_of_birth: String;
  zip_code: String;
  pets: Pet[];
}

interface Pet {
  name: String;
  species: String;
  carry: String;
  weight: Number;
  date_of_birth: String;
}

const TutorSchema = new Schema<Tutor>({
  name: { type: String, required: true },
  phone: { type: String, require: true },
  email: { type: String, required: true },
  date_of_birth: { type: String },
  zip_code: { type: String, required: true },
  pets: [
    {
      name: { type: String, required: true },
      species: { type: String, required: true },
      carry: { type: String, required: true },
      weight: { type: Number, required: true },
      date_of_birth: { type: String, required: true },
    },
  ],
});

const Tutor = model<Tutor>("TutorsPet", TutorSchema);

export default Tutor;
