import { Router } from "express";
import contactsRouter from "./contacts.controller";
import validationRouter from "./validation.controller";

const router = Router({ mergeParams: true });

router.use("/contacts", contactsRouter);
router.use("/validation", validationRouter);

export default router;
