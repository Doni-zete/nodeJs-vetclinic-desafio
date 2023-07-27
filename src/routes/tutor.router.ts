import { Router } from "express";
 import tutorController from "../controllers/tutor.controller"

const router = Router();


router.get("/findAll", tutorController.findAllTutorsController);

router.post("/create", tutorController.createTutorController);
router.post("/createPet/:id",tutorController.createPetTutorController)

router.put("/update/:id", tutorController.updateTutorController);

router.delete("/remove/:id", tutorController.deleteTutorController);



export default router;
