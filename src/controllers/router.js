import { Router } from "express";
import contactsRouter from "./contacts.controller";
import validationRouter from "./validation.controller";

const router = Router({ mergeParams: true });

// rota para a API de contatos
router.use("/contacts", contactsRouter);
// rota para validação de string (Exercício 1)
router.use("/validation", validationRouter);

export default router;
