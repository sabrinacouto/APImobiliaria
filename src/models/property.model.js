import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Property = sequelize.define(
  "properties",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.ENUM("ativado", "desativado"),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountBedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amountBathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amountGarage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valueCondominium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iptu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valueRental: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valueSell: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSelling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isRenting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "properties",
  }
);

export default Property;
