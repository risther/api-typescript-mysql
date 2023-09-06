"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Esquema de las propiedades que se van a gurdar en la base de datos
const ItemSchema = new mongoose_1.Schema(//Schema=esquema, como un modelo
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
}, {
    timestamps: true,
    versionKey: false,
});
const ItemModel = (0, mongoose_1.model)("items", ItemSchema); //items es el nombre del modelo de la BD  y que mode sera alimentado por nuestro esquema ItemSchema
exports.default = ItemModel;
