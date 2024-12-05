import express from "express";
import connectMongo from "./config/mongoose";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

connectMongo();

sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL autenticado correctamente."))
  .catch((error) => {
    console.error("Error en la autenticación: ", error);
    process.exit(1);
  });

// Routes

app.use("/api", userRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Algo salió mal, intentelo de nuevo" });
  }
);

export default app;
