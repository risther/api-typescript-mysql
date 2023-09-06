"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || ""; //En el authorization se envian el jwt
        const jwt = jwtByUser.split(" ").pop(); //Tomamos elultimo elemento del array, del bearer
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`); //${jwt}: te utiliza para definir o convert el jwt un string
        if (!isUser) { //si la verificacion del token es falsa enviamos el error, sino continuamos
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }
        else {
            req.user = isUser; //POR PROBLEMAS CON TS, creamos una interfazas para que user tenga los datos de isUSER
            next();
        }
    }
    catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALIDAD");
    }
};
exports.checkJwt = checkJwt;
