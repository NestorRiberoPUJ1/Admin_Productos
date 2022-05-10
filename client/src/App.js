import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActualizarProducto from "./components/ActulizarProducto/ActualizarProducto";
import AllProducts from "./components/AllProducts/AllProducts";
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";
import Producto from "./components/Producto/Producto";


const App = () => {
  return (
    <div className="container">

      <BrowserRouter>

        <Switch>
          <Route path="/" exact render={() => <AllProducts />} />
          <Route path="/nuevo" render={() => <NuevoProducto />} />
          <Route path="/producto/:id" exact render={(routeProps) => <Producto {...routeProps} />} />
          <Route path="/producto/editar/:id" exact render={(routeProps) => <ActualizarProducto {...routeProps} />} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
