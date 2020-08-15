import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
    state = {
        productos: [
            { id: 1, nombre: 'Camisa de ReactJS', precio: 30 },
            { id: 2, nombre: 'Camisa de VueJS', precio: 40 },
            { id: 3, nombre: 'Camisa de Angular', precio: 50 },
            { id: 4, nombre: 'Camisa de Node.js', precio: 60 },
        ]
    }

    componentDidMount() {
        console.log(1);
    }

    componentWillMount() {
        console.log(2);
    }

    componentWillUpdate() {
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }


    render() {
        console.log(5);
        const { productos } = this.state;

        return (
            <Fragment>
                <h2>Lista de Productos</h2>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto} />
                ))}
            </Fragment>
        );
    }
}

export default ListaProductos;