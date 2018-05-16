import React from 'react';

const ShoppingCart = ({ data,index,removeItem }) => (
    <div className="card" key={index}>
    <div id={data.color}></div>
        <div className="card-body">
            <h5 className="card-title">Nombre: {data.name}</h5>
            <p className="card-text">Precio: ${data.price}</p>
            <a className="btn button-remove" onClick={()=> removeItem(index,data.price)}> Eliminar del carro</a>
        </div>
    </div>
);
export default ShoppingCart;