import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const UserPostgres = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },

  {
    tableName: "users",
    timestamps: false,
  }
);

export default UserPostgres;
