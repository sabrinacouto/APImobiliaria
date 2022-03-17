import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

try {
  sequelize.authenticate();
  console.log(`Banco conectado`);
} catch (err) {
  console.log(`Deu ruim! Olha só: ${err}`);
}

export default sequelize;
