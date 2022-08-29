import connection from "./connection";
import { ObjectId } from "mongodb";

// função recebe a coleção e o novo documento a ser adicionado.
export const create = async (entity) => {
  try {
    const connecting = await connection();
    const result = connecting.collection("contatos").insertOne(entity);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// função recebe a coleção e gera um array com a lista.
export const list = async () => {
  try {
    const connecting = await connection();
    const result = connecting.collection("contatos").find().toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// função recebe a coleção e o id a ser deletado.
export const remove = async (id) => {
  try {
    const connecting = await connection();
    const result = await connecting
      .collection("contatos")
      .deleteOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};

// função recebe a coleção, o id e os dados a serem atualizados.
export const update = async (entity) => {
  try {
    const { id, name, phone, email, whatsapp } = entity;
    const connecting = await connection();
    const result = await connecting.collection("contatos").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name,
          phone,
          email,
          whatsapp,
        },
      }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};
