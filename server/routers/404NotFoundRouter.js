import express from "express";
import _404NotFound from "../middleware/404NotFound.js"

const router = express.Router();

router.get("/*/", _404NotFound);

export default router;