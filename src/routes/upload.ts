import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);//single para un archivo, podemos cambiar el metodo a mas archivos

export { router };
