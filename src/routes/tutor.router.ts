import { Router } from "express";
import * as tutorController from "../controllers/tutor.controller"
import {validationTutor,validationPet} from "../middleware/validation"

const router = Router();


router.get("/tutors", tutorController.findAllTutorsController);
router.post("/tutor", validationTutor,tutorController.createTutorController);
router.put("/tutor/:id",validationTutor, tutorController.updateTutorController);
router.delete("/tutor/:id", tutorController.deleteTutorController);

router.post('/pet/:tutorId',validationPet,tutorController.createPetTutorController);
router.put('/pet/:petId/tutor/:tutorId', validationPet,tutorController.updatePetTutorController);
router.delete('/pet/:petId/tutor/:tutorId', tutorController.deletePetTutorController);


export default router;
