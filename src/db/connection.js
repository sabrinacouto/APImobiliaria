import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "./src/db/database.sqlite",
});

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
