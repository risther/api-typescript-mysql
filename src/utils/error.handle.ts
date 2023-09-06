import {Response} from "express";

const  handleHttp= (res: Response, error: string, errorRaw?: any)=>{ //Agregamos el errorRaw: es un error ambiguo
    console.log(errorRaw)
    res.status(500)
    res.send({error})
    //aqui podemos ingresar funciones y todo el manejode errores que deseemos
};
export{handleHttp};