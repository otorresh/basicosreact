import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import './App.css';

function App() {

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa de ReactJS', precio: 30 },
    { id: 2, nombre: 'Camisa de VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa de Angular', precio: 50 },
    { id: 4, nombre: 'Camisa de Node.js', precio: 60 },
  ]);

  // State para carrito de compras
  const [carrito, agregarProducto] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />

      <h2>Lista de Productos</h2>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
