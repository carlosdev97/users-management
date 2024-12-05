import { Sequelize } from "sequelize";

// Connect to your PostgreSQL database

const sequelize = new Sequelize({
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

export default sequelize;
