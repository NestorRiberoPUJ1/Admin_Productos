import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";


const ActualizarProducto = () => {

    const history = useHistory();
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const [errors, setErrors] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/" + id)
            .then(result => {
                console.log(result);
                setNombre(result.data.nombre);
                setPrecio(result.data.precio);
                setDescripcion(result.data.descripcion);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);

    const actualizarProducto = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/" + id, {
            nombre,
            precio,
            descripcion
        })
            .then(result => {
                history.push("/");
            })
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div className="container">

            <form onSubmit={actualizarProducto}>
                <h1>Editar Producto</h1>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="number" className="form-control" onChange={(e) => setPrecio(e.target.value)} value={precio} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea id="descripcion" name="descripcion" className="form-control" cols="30" rows="5" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                    {errors.descripcion ? <span className="text-danger">{errors.descripcion.message}</span> : null}
                </div>

                <hr />

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );

}


export default ActualizarProducto;