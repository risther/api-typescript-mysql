import { handleHttp } from "../utils/error.handle"
import {Request, Response} from "express";

const getBLOG= (req: Request , res: Response)=>{

    try{
        

    }catch(e){
        handleHttp( res,"ERROR_GET_BLOG'");
    }
};

const getBLOGs=  (req: Request , res: Response)=>{
    try{

    }catch(e){
        handleHttp( res,"ERROR_GET_BLOGS'");
    }
};

const updateBLOG=(req: Request , res: Response)=>{
    try{
        
    }catch(e){
        handleHttp( res,"ERROR_UPDATE_BLOGS'");
    }
};
const postBLOG=({body}: Request , res: Response)=>{
    try{
        res.send(body);
    }catch(e){
        handleHttp( res,"ERROR_POST_BLOGS'");
    }
};

const deleteBLOG=(req: Request , res: Response)=>{
    try{

    }catch(e){
        handleHttp( res,"ERROR_DELETE   _BLOGS'");
    }
};

export{getBLOG,getBLOGs,postBLOG,updateBLOG,deleteBLOG};