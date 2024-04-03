import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router();

router.get("/all-users", userController.getAll);
router.post("/add-user", userController.addUser);
router.patch("/update-user", userController.updateUser);
router.delete("/remove-user", userController.removeUser);
router.get("/:id", userController.getUserById);

export default router;