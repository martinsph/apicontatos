import { Router } from "express";

// função para validação de string
const isValidtext = (text) => {
  console.log(text);
  const aux = [];
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  // percorre cada caracter da string
  for (let letter of text) {
    //se incluir algum do array open, adiciona no array novo
    if (open.includes(letter)) {
      aux.push(letter);
      // se tiver na lista close, salva o index correspondente do open em uma variável
    } else if (close.includes(letter)) {
      const openRespective = open[close.indexOf(letter)];

      // se o último caracter salvo no array auxiliar for igual a variável salva acima remove da auxiliar.
      if (aux[aux.length - 1] === openRespective) {
        aux.splice(-1, 1);
      } else {
        // se não adiciona a letra no array aux
        aux.push(letter);
        break;
      }
    }
  }
  // retorna true se o array aux for igual a zero, pois
  // todos os caracteres procurados foram removidos pois tinham par.
  return aux.length === 0;
};

// Recebe a string através do corpo da requisição e valida.
const validate = async (req, res, next) => {
  try {
    const { text } = req.body;
    const result = isValidtext(text) ? "É válido" : "Não é válido"; // Ternário retorna resposta.
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const validationRouter = Router({ mergeParams: true });

// rota POST para validação da string
validationRouter.post("/", validate);

export default validationRouter;
