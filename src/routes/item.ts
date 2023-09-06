import { Router, Response,Request } from "express"; // Routes es una funcion
import {
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem,
  } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router= Router()

/**
 * http://localhost:3002/items [GET]  //haciendo un GET va a llegar a la ruta definida abajo ITEMS
 */
/*router.get('/',(req: Request, res:Response)=>{ //Por cada request necesita tener un response
    res.send({data:'AQUI VAN LOS MODELOS'});
})
*/

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem); //utilizamos el log middleware aqui porque es la ruta que hace la peticion del detalle

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export {router}