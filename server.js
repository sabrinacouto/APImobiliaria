import * as dotenv from "dotenv";
import sequelize from "./src/db/connection.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on http://localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
