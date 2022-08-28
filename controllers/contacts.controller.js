import * as model from "../models/contacts.model";
import { Router } from "express";

const create = async (req, res, next) => {
  try {
    const { name, phone, email, whatsapp } = req.body;
    const result = await model.create({ name, phone, email, whatsapp });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const result = await model.list();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await model.remove(id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

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

contactsRouter.post("/", create);
contactsRouter.get("/", list);
contactsRouter.put("/:id", update);
contactsRouter.delete("/:id", remove);

export default contactsRouter;
