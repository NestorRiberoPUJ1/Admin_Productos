const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minlength: [3, "Nombre debe tener al menos 3 caracteres"]
    },
    precio: Number,
    descripcion: {
        type: String,
        required: [true, "Descripción obligatoria."],
        minlength: [5, "Descripción debe tener al menos 5 caracteres"]
    }
}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;