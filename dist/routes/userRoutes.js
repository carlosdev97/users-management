"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userPostgres_1 = __importDefault(require("../models/userPostgres"));
const userMongo_1 = __importDefault(require("../models/userMongo"));
const router = (0, express_1.Router)();
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPostgres = yield userPostgres_1.default.findAll();
        const userMongo = yield userMongo_1.default.find();
        res.json({ postgres: userPostgres, mongo: userMongo });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email } = req.body;
    try {
        const newUserPostgres = yield userPostgres_1.default.create({
            firstname,
            lastname,
            email,
        });
        const newUserMongo = yield userMongo_1.default.create({
            firstname,
            lastname,
            email,
        });
        res.status(201).json({
            message: "Usuario creado exitosamente en la base de datos",
            postgres: newUserPostgres,
            mongo: newUserMongo,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
