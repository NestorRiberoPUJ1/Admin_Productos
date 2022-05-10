import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoProducto = () => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const history = useHistory();

    const guardarProducto = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/productos", {
            nombre,
            precio,
            descripcion
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="container">

            <form onSubmit={(e) => guardarProducto(e)}>
                <h1>Nuevo Producto</h1>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="number" className="form-control" onChange={(e) => setPrecio(e.target.value)} value={precio} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea id="descripcion" name="descripcion" className="form-control" cols="30" rows="5" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                </div>

                <hr />

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );

}

export default NuevoProducto;
