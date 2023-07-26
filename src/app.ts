import express, { Request, Response } from "express";
import connectToDatabase from "./database/database";
import Tutor from "./models/tutor.model";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = 3000;

const dbURL = process.env.URLDATABASE;


app.get("/tutors", async (req: Request, res: Response) => {
  const tutors = await Tutor.find();
  res.json(tutors);
});


if (!dbURL) {
  console.log("URLDATABASE não definida no arquivo .env");
} else {
  const start = async () => {
    try {
      await connectToDatabase(dbURL);
      app.listen(port, () => {
        console.log(`Servidor rodando em: http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  start();
}
