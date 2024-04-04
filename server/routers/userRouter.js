import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/add-user", userController.addNewUser);
router.patch("/update-user/:id", userController.updateUser);
router.delete("/remove-user/:id", userController.removeUser);
router.get("/:id", userController.getUserById);

export default router;