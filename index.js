import express, { json } from "express";
import router from "../controllers/router.js.js";
import err from "./middlewares/error.js";

const PORT = 3000;
const app = express();

app.use(json());
app.use("/", router);
app.use(err);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
