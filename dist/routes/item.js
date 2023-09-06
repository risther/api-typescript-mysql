"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express"); // Routes es una funcion
const item_1 = require("../controllers/item");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3002/items [GET]  //haciendo un GET va a llegar a la ruta definida abajo ITEMS
 */
/*router.get('/',(req: Request, res:Response)=>{ //Por cada request necesita tener un response
    res.send({data:'AQUI VAN LOS MODELOS'});
})
*/
router.get("/", item_1.getItems);
router.get("/:id", log_1.logMiddleware, item_1.getItem); //utilizamos el log middleware aqui porque es la ruta que hace la peticion del detalle
router.post("/", item_1.postItem);
router.put("/:id", item_1.updateItem);
router.delete("/:id", item_1.deleteItem);
