import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    decimalDigits: {
        type: Number,
        required: true,
        min: 0
    },
    exchangeRate: {
        type: Number,
        required: true,
        min: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const currency = mongoose.model("currency", currencySchema);

export default currency;