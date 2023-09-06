import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => { //NEXT para que continue haciendo la funcion, para que el cliente no este esperando
  const header = req.headers;//aqui podemos pedir todos los datos que se estan enviando desde el cliente
  const userAgent = header["user-agent"];// en este caso estamo pidiendo el navegador
  console.log("user-agent", userAgent);
  //console.log("Hola soy eel middleware next")
  next();
};

export { logMiddleware };
