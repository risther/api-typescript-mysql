import { Router, Response,Request } from "express"; // Routes es una funcion
import { registerCtrl, loginCtrl } from "../controllers/auth";

const router= Router()

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export {router}