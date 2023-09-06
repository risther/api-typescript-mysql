"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    const header = req.headers; //aqui podemos pedir todos los datos que se estan enviando desde el cliente
    const userAgent = header["user-agent"]; // en este caso estamo pidiendo el navegador
    console.log("user-agent", userAgent);
    //console.log("Hola soy eel middleware next")
    next();
};
exports.logMiddleware = logMiddleware;
