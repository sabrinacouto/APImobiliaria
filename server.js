import sequelize from "./src/db/connection.js";
import express from "express";
import Property from "./src/models/property.model.js";
import router from "./src/routes/routes.js";

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/property", router);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on http://localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
