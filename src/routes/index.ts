import { Router } from "express"; 
import {readdirSync} from "fs"; //funcion para leer directorio

const PATH_ROUTER= `${__dirname}`; //devuelve la ruta del directorio actual, el ultimo directorio, donde se encuentra este archivo
const router= Router();

/**
 *
 * @returns
 */
const cleanFileName =(fileName:string)=>{ //esta funcion recibe un filename (index.ts) y nos retorna solo en nombre del item (index)
    const file = fileName.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName)=>{ // A la funcion readdirSync le pasamos la ruta del directorio actual y con filter nos devolvera los nombres de los archivos
    const cleanName=cleanFileName(fileName);
    if(cleanName !=="index"){// no nos interesa que index.ts aparezca en el fileName

        //necesitamos importar dinamicamente los datos que estan en el itema(archivo de rutas)
        import(`./${cleanName}`).then((moduleRouter)=>{ //esta importacion nos devuelve una promesa (el Router de item.ts)
            console.log(`Se esta cargando la ruta... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router); // el router principal usara el de nombre de la ruta, el modulo Router de item.ts
        })
        //console.log(cleanFileName(fileName));
    }
    
})

export{router};