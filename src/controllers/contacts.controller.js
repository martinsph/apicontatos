import * as model from "../models/contacts.model";
import { Router } from "express";

// envia a info necessária para o cadastro (nome, tel, email e whatsapp) pro model
const create = async (req, res, next) => {
  try {
    const { name, phone, email, whatsapp } = req.body;
    const result = await model.create({ name, phone, email, whatsapp });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// recupera a lista de contatos do model
const list = async (req, res, next) => {
  try {
    const result = await model.list();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// recebe o id pelp params e envia ao model para deletar contato
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await model.remove(id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// envia as infos para o model para atualizar o contato
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, phone, email, whatsapp } = req.body;
    const result = await model.update({ id, name, phone, email, whatsapp });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const contactsRouter = Router({ mergeParams: true });

// define as rotas da API
contactsRouter.post("/", create);
contactsRouter.get("/", list);
contactsRouter.put("/:id", update);
contactsRouter.delete("/:id", remove);

export default contactsRouter;
