import express from "express";
import currencyController from "../controllers/currencyController.js";

const router = express.Router();

router.get("/", currencyController.getAllCurrencies);
router.post("/create-new-currency", currencyController.createNewCurrency);
router.get("/exchange-rates", currencyController.exchangeRates);
router.get("/exchange-rates/:id", currencyController.exchangeRateById);
router.post("/converter", currencyController.converter);
router.patch("/set-exchange-rate/:id", currencyController.setExchangeRate);

export default router;
