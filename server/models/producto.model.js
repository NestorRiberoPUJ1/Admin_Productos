const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({

    nombre: String,
    precio: Number,
    descripcion: String
}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;