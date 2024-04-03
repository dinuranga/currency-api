import currencyModel from "../models/currencyModel.js"

const currencyController = {
    exchangeRates: (req, res) => {
        res.json({messege:"Exchange Rates"});
    },
    exchangeRateById: (req, res) => {
        const currency = (req.params.id).toUpperCase();
        res.json({messege:`Exchange Rate of ${currency}`});
    },
    converter: (req, res) => {
        res.json({messege:"Convert Currency"});
    },
    setExchangeRate: (req, res) => {
        res.json({messege:`Update Rate`});
    }
}

export default currencyController;