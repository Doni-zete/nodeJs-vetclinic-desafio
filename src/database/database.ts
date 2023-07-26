import mongoose from "mongoose";
const connectToDatabase = (linkConnect: string) => {
  return mongoose
    .connect(linkConnect)
    .then(() => console.log("Mongo DB conectado"))
    .catch((err) => console.log(`Erro na conexao com o banco: ${err}`));
};

export default connectToDatabase;
