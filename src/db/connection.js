import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function conectar() {
  try {
    await sequelize.authenticate();
    console.log(`Banco conectado`);
  } catch (err) {
    console.log(`Deu ruim! Olha só: ${err}`);
  }
}
conectar();

export default sequelize;
