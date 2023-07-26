import { Router } from "express";
 import tutorController from "../controllers/tutor.controller"

const router = Router();


router.get("/tutors", tutorController.findAllTutorsController);
router.post("/tutor", tutorController.createTutorController);

router.put("/tutor/:id");
router.delete("/tutor/:id");

export default router;
