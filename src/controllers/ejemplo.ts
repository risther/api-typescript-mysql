import {Request, Response} from "express";
import  {getEjemplo,updateEjemplo,insertEjemplo,deleteEjemplo} from '../services/ejemplo'
import { handleHttp } from "../utils/error.handle"
import { parse } from 'dotenv';
import { Ejemplo } from '../interfaces/ejemplo.interface';

const getItems=  async(req: Request , res: Response)=>{
    try {
        const response = await getEjemplo();
        res.send(response);
      } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", e);
      }
};

const updateItem= async(req:Request, res: Response)=>{
  try{   
      const  id  = parseInt(req.params.idEjemplo);
      const updatePost: Ejemplo = req.body[0];
      const response = await updateEjemplo(id,updatePost); 
      const data = response ? response : "NOT_FOUND";
      res.send(data);
      
  }catch(e){
      handleHttp( res,"ERROR_UPDATE_ITEMS'");
  }
};

const insertItem= async(req:Request, res: Response)=>{
  try{   
      
      const insertPost: Ejemplo = req.body[0];
      const response = await insertEjemplo(insertPost); 
      const data = response ? response : "NOT_FOUND";
      res.send(data);
      
  }catch(e){
      handleHttp( res,"ERROR_UPDATE_ITEMS'");
  }
};

const deleteItem= async(req:Request, res: Response)=>{
  try{   
    const  id  = parseInt(req.params.idEjemplo);
      const response = await deleteEjemplo(id); 
      const data = response ? response : "NOT_FOUND";
      res.send(data);
      
  }catch(e){
      handleHttp( res,"ERROR_UPDATE_ITEMS'");
  }
};
export {getItems,updateItem,insertItem,deleteItem};