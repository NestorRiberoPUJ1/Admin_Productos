import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then(res => {
                setProductos(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const borrarProducto = (idProduct) => {
        axios.delete("http://localhost:8000/api/productos/" + idProduct)
            .then(res => {
                let aux = productos.filter(item => item._id !== idProduct);
                setProductos(aux);
            })
            .catch();
    }

    return (
        <div>
            <h1>All products</h1>
            <Link className="btn btn-success mb-4 mt-2" to="/nuevo">Nuevo producto</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, index) => {
                            return (
                                <tr key={index}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/producto/${producto._id}`} >Detalle</Link>
                                        <Link className="btn btn-warning ml-2" to={`/producto/editar/${producto._id}`} >Editar</Link>
                                        <button className="btn btn-danger ml-2" onClick={() => borrarProducto(producto._id)} >Eliminar</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts;