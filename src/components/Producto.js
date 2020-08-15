import React from 'react';

const Producto = ({ producto, productos, carrito, agregarProducto }) => {

  const { id, nombre, precio } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(prod => prod.id === id)[0];
    agregarProducto([
      ...carrito,
      producto
    ]);
  }

  // Eliminar producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(prod => prod.id !== id);

    // Colocar los productos en el state
    agregarProducto(productos);
  }

  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      {productos
        ?
        (
          <button
            type="button"
            id="comprar"
            onClick={() => seleccionarProducto(id)}
          >Comprar
          </button>
        )
        :
        (
          <button
            type="button"
            onClick={() => eliminarProducto(id)}
          >Eliminar
          </button>
        )
      }
    </div>
  )
};

export default Producto;