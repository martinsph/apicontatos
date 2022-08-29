import { Router } from "express";

const isValidtext = (text) => {
  console.log(text);
  const aux = [];
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  for (let letter of text) {
    if (open.includes(letter)) {
      aux.push(letter);
    } else if (close.includes(letter)) {
      const openPair = open[close.indexOf(letter)];

      if (aux[aux.length - 1] === openPair) {
        aux.splice(-1, 1);
      } else {
        aux.push(letter);
        break;
      }
    }
  }

  return aux.length === 0;
};

const validate = async (req, res, next) => {
  try {
    const { text } = req.body;
    const result = isValidtext(text) ? "É válido" : "Não é válido";
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const validationRouter = Router({ mergeParams: true });

validationRouter.post("/", validate);

export default validationRouter;
