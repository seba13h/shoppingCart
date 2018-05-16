import React from 'react';

const ProductList = ({ data,index,addItem }) => (
    <div className="card" key={index}>
                <div id={data.color}></div>
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {data.name}</h5>
                        <p className="card-text">Precio: ${data.price}</p>
                        <a className="btn button-add" onClick={()=> addItem(data.price,data)}>Añadir al carro</a>
                    </div>
             </div>
);
export default ProductList;