import { Router } from "express";
 import tutorController from "../controllers/tutor.controller"

const router = Router();


router.post("/");
router.get("/tutors", tutorController.findAllTutorsController);

router.put("/:id");
router.delete("/:id");

export default router;
