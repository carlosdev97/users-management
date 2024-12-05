"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Connect to your PostgreSQL database
const sequelize = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "user_management",
});
sequelize
    .authenticate()
    .then(() => console.log("Conexión a PostgreSQL exitosa."))
    .catch((error) => console.error("Error en la conexión a PostgreSQL.", error));
exports.default = sequelize;
