import express from "express"
import dotenv from "dotenv"
import currencyRouter from "./routers/currencyRouter.js";
import userRouter from "./routers/userRouter.js"
import _404NotFoundRouter from "./routers/404NotFoundRouter.js"
import limiter from "./middleware/rateLimit.js"

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(limiter);

app.use("/currency", currencyRouter);
app.use("/user", userRouter);
app.use("/",_404NotFoundRouter);

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});