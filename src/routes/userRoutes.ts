import { Router } from "express";
import UserPostgres from "../models/userPostgres";
import UserMongo from "../models/userMongo";

const router = Router();
router.get("/users", async (req, res) => {
  try {
    const userPostgres = await UserPostgres.findAll();
    const userMongo = await UserMongo.find();
    res.json({ postgres: userPostgres, mongo: userMongo });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post("/users", async (req, res) => {
  const { first_name, last_name, email } = req.body;
  try {
    const newUserPostgres = await UserPostgres.create({
      first_name,
      last_name,
      email,
    });
    const newUserMongo = await UserMongo.create({
      first_name,
      last_name,
      email,
    });
    res.status(201).json({
      message: "Usuario creado exitosamente en la base de datos",
      postgres: newUserPostgres,
      mongo: newUserMongo,
    });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
