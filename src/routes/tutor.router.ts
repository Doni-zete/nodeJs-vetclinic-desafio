import { Router } from "express";
 import tutorController from "../controllers/tutor.controller"

const router = Router();


router.get("/tutors", tutorController.findAllTutorsController);
router.post("/tutor", tutorController.createTutorController);
router.put("/tutor/:id", tutorController.updateTutorController);
router.delete("/tutor/:id", tutorController.deleteTutorController);

router.post('/pet/:tutorId', tutorController.createPetTutorController);
router.put('/pet/:petId/tutor/:tutorId', tutorController.updatePetTutorController);
router.delete('/pet/:petId/tutor/:tutorId', tutorController.deletePetTutorController);




export default router;
