import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar =async (item: Car) =>{ //recibimos un parametro de tipo Car
    const responseInsert= await ItemModel.create(item)// esperamos a que se cree segun el esquema ya definido
    return responseInsert;
};
const getCars = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
  };
  
  const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id });
    return responseItem;
  };
  
  const updateCar = async (id: string, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
      new:true, //Por defecto el findOneAndUpdate retorna el estado anterior a la actualizacion, por esta razon ponemos true
    });
    return responseItem;
  };
  
  const deleteCar = async (id: string) => {
    const responseItem = await ItemModel.deleteOne({ _id: id });
    return responseItem;
  };

export{ insertCar, getCars, getCar, updateCar,deleteCar};