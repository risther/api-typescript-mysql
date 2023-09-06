"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // para que el proyecto empiece a aplicar las configuracioan de variables de entorno
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
//import bodyParser from "body-parser";
const PORT = process.env.PORT || 3001; // Utilizamos la varible de entorno PORT del archivp ".env" donde se definen las variables de entorno
const app = (0, express_1.default)();
//app.use(bodyParser.json());
app.use((0, cors_1.default)()); // CORS: para consumir APIS, se puede especificar las rutas origenes que se van a comsumir, pero ahora consumiremos de * los origenes
app.use(express_1.default.json()); // para utilizar json con los controladores
app.use(routes_1.router); //IMPORTANTE, el orden de los app.use afecta el uso, tener cuidado con esto.
(0, mongo_1.default)().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`)); // mandamos el PUERTO, una vez que funcione  restornamos el mensaje
