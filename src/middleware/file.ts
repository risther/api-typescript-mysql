import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;//Esta ruta se forma combinando el directorio de trabajo actual del proceso (process.cwd()) con "/storage".

const storage = diskStorage({//configura cómo y dónde se guardarán los archivos cargados.
  destination(req: Request, file: Express.Multer.File, cb: any) {//destination: determinar la carpeta de destino donde se almacenará el archivo.
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;

/**
 * En resumen, este código establece un middleware de manejo de carga de archivos que utiliza la biblioteca "multer" 
 * en una aplicación Express. Cuando se envía una solicitud HTTP con un archivo adjunto, este middleware se encargará 
 *de guardar el archivo en el directorio de almacenamiento especificado, utilizando un nombre de archivo único basado 
 en la fecha actual y la extensión del archivo original.
 */