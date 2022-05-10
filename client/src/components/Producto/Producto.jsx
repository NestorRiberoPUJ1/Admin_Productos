import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const Producto = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/" + id)
            .then(result => {
                console.log(result);
                setProducto(result.data);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);


    return (
        <div className="card">
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio}</h2>
            <p>{producto.descripcion}</p>
            <Link to="/" className="btn btn-primary" >Home</Link>
        </div>
    );

}

export default Producto;