import { MongoClient } from "mongodb";
import "dotenv/config";

const MONGO_DB_URL = `mongodb://${
  process.env.HOST || "mongodb"
}:27017/apicontatos`;
const DB_NAME = "apicontatos";

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async () => {
  try {
    return (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
