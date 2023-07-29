import express from "express";
import connectToDatabase from "./database/database";
import tutorRouter from "./routes/tutor.router";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const port = 3000;

const dbURL = process.env.URLDATABASE;

app.use(tutorRouter);

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
