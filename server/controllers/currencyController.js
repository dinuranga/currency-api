import currencyModel from "../models/currencyModel.js";

const currencyController = {
    getAllCurrencies: async (req, res) => {
        try {
            const currencyData = await currencyModel.find();
            res.status(200).json(currencyData);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    createNewCurrency: async (req, res) => {
        const currencyData = new currencyModel(req.body);
    
        try {
            const existingCurrency = await currencyModel.findOne({ code: currencyData.code });
            if (existingCurrency) {
                res.status(409).json({ error: "Currency already exists" });
            } else {
                await currencyData.save();
                res.status(201).json(currencyData);
                console.log("Currency saved successfully:", currencyData); 
            }
        } catch (error) {
            console.error("Error saving currency:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },    
    exchangeRates: async (req, res) => {
        try {
            const allCurrencies = await currencyModel.find({});
            if (!allCurrencies) {
                return res.status(404).json({ error: "Currencies not found" });
            }
            const exchangeRates = allCurrencies.map(currency => ({
                code: currency.code,
                exchangeRate: currency.exchangeRate
            }));
            res.status(200).json(exchangeRates);
        } catch (error) {
            console.error("Error getting exchange rates:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    exchangeRateById: async (req, res) => {
        try {
            const currencyCode = req.params.id.toUpperCase(); 
            const currency = await currencyModel.findOne({ code: currencyCode });
            
            if (!currency) {
                return res.status(404).json({ error: "Currency not found" });
            }
            
            res.status(200).json({ 
                code: currency.code, 
                exchangeRate: currency.exchangeRate,
                last_Updated: currency.lastUpdated
            });
        } catch (error) {
            console.error("Error getting exchange rate:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    converter: async (req, res) => {
        try {
            const { sourceCurrency, targetCurrency, amount } = req.body;
            const sourceExchangeRate = await currencyModel.findOne({ 
                code: sourceCurrency.toUpperCase() 
            });
            const targetExchangeRate = await currencyModel.findOne({ code: targetCurrency.toUpperCase() });
    
            if (!sourceExchangeRate || !targetExchangeRate) {
                return res.status(404).json({ error: "One or both currencies not found" });
            }
            const convertedAmount = (amount * sourceExchangeRate.exchangeRate) / targetExchangeRate.exchangeRate;
            res.status(200).json({ convertedAmount });
        } catch (error) {
            console.error("Error converting currency:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    setExchangeRate: async (req, res) => {
        try {
            const currencyCode = req.params.id.toUpperCase();
            const newExchangeRate = req.body.exchangeRate;
            const updateExchangeRate = await currencyModel.findOneAndUpdate(
                { code: currencyCode },
                { $set: { exchangeRate: newExchangeRate } },
                { new: true }
            );
            if (!updateExchangeRate) {
                return res.status(404).json({ error: "Currency not found" });
            }
            res.status(200).json(updateExchangeRate);
        } catch (error) {
            console.error("Error setting exchange rate:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }    
}

export default currencyController;