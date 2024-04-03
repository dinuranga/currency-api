import express from "express"
import currencyController from "../controllers/currencyController.js";

const router = express.Router();

router.get("/exchange-rates", currencyController.exchangeRates);
router.get("/exchange-rates/:id", currencyController.exchangeRateById);
router.get("/converter", currencyController.converter);
router.patch("/set-exchange-rate", currencyController.setExchangeRate);

export default router;