import express, { json } from "express";
import router from "./controllers/router.js";
import err from "./middlewares/error.js";
import cors from "cors";

const PORT = 3001;
const app = express();

app.use(cors());
app.use(json());
app.use("/", router);
app.use(err);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
