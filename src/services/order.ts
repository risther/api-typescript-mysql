import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getOrders = async () => {
  const responseItem = await ItemModel.find({});// mandamos a buscar el token al servidor
  return responseItem;
};

export { getOrders };
