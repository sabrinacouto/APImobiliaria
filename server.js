import * as dotenv from "dotenv";
import sequelize from "./src/db/connection.js";
import express from "express";
import Property from "./src/models/property.model.js";
import router from "./src/routes/routes.js";

const app = express();

const port = process.env.port;

app.use(express.json());
app.use("/property", router);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on http://localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
