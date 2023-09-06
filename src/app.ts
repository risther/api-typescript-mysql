import "dotenv/config"; // para que el proyecto empiece a aplicar las configuracioan de variables de entorno
import express from "express";
import cors from "cors";
import {router} from "./routes";
import db from "./config/mongo"
 //import bodyParser from "body-parser";
const PORT= process.env.PORT || 3001;// Utilizamos la varible de entorno PORT del archivp ".env" donde se definen las variables de entorno
const app=express();

//app.use(bodyParser.json());
app.use(cors()); // CORS: para consumir APIS, se puede especificar las rutas origenes que se van a comsumir, pero ahora consumiremos de * los origenes
app.use(express.json()); // para utilizar json con los controladores
app.use(router); //IMPORTANTE, el orden de los app.use afecta el uso, tener cuidado con esto.
db().then(()=> console.log("Conexion Ready"));
app.listen(PORT, ()=> console.log(`Listo por el puerto ${PORT}`)); // mandamos el PUERTO, una vez que funcione  restornamos el mensaje