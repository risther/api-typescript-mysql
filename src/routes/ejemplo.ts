import { Router, Response,Request } from "express"; // Routes es una funcion
import {
    getItems,updateItem,insertItem,deleteItem
  } from '../controllers/ejemplo';

const router= Router()

router.get("/", getItems);
router.post("/",insertItem);
router.put("/update/:idEjemplo",updateItem);
router.delete("/:idEjemplo",deleteItem);


export {router}