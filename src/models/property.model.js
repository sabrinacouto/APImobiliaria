import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Property = sequelize.define(
  "properties",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      require: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    isActive: {
      type: DataTypes.ENUM("ativado", "desativado"),
      allowNull: false,
      require: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    amountBedrooms: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      require: true,
    },
    amountBathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      require: true,
    },
    amountGarage: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      require: true,
    },
    valueCondominium: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false,
      require: true,
    },
    iptu: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    valueRental: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    valueSell: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    isSelling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      require: true,
    },
    isRenting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      require: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
  },
  {
    tableName: "properties",
  }
);

export default Property;
