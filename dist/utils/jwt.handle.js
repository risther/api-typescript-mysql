"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"; //obtenemos nuestr JWT_Secret que es la firma del servidor
const generateToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, {
        expiresIn: "2h", // podemos dar un tiempo expiracion a nuestro  jwt
    });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (jwt) => {
    const isOk = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET); // verificamos el token con el jwt y la llave secreta del servidor
    return isOk;
};
exports.verifyToken = verifyToken;
