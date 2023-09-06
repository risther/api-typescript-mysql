import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

//Esquema de las propiedades que se van a gurdar en la base de datos
const ItemSchema = new Schema<Car>(  //Schema=esquema, como un modelo
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }

  },
  {
    timestamps: true,
    versionKey: false,
  
  }
);

const ItemModel = model("items", ItemSchema); //items es el nombre del modelo de la BD  y que mode sera alimentado por nuestro esquema ItemSchema
export default ItemModel;
