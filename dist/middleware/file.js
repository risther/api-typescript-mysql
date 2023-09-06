"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importStar(require("multer"));
const PATH_STORAGE = `${process.cwd()}/storage`; //Esta ruta se forma combinando el directorio de trabajo actual del proceso (process.cwd()) con "/storage".
const storage = (0, multer_1.diskStorage)({
    destination(req, file, cb) {
        cb(null, PATH_STORAGE);
    },
    filename(req, file, cb) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});
const multerMiddleware = (0, multer_1.default)({ storage });
exports.default = multerMiddleware;
/**
 * En resumen, este código establece un middleware de manejo de carga de archivos que utiliza la biblioteca "multer"
 * en una aplicación Express. Cuando se envía una solicitud HTTP con un archivo adjunto, este middleware se encargará
 *de guardar el archivo en el directorio de almacenamiento especificado, utilizando un nombre de archivo único basado
 en la fecha actual y la extensión del archivo original.
 */ 
