"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("./config/mongoose"));
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
(0, mongoose_1.default)();
database_1.default
    .authenticate()
    .then(() => console.log("PostgreSQL autenticado correctamente."))
    .catch((error) => {
    console.error("Error en la autenticación: ", error);
    process.exit(1);
});
// Routes
app.use("/api", userRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Algo salió mal, intentelo de nuevo" });
});
exports.default = app;
