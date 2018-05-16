import React from 'react';
import ProductList from './productList';
import ShoppingCart from './shoppingCart'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: [
                { name: "polera", price: 5000, color: "red" },
                { name: "pantalon", price: 20000, color: "green" },
                { name: "zapatos", price: 35000, color: "blue" },
                { name: "lentes", price: 4000, color: "yellow" },
            ],
            total:0,
            productSelect:[]
        }
    }
    addItem(price,data){
        this.setState({ total: this.state.total + price   })
        this.state.productSelect.push(data);
    }
    removeItem(index,price){
        this.setState({ total: this.state.total - price })
        this.state.productSelect.splice(index,1);
    }

    render() {
        const productList = this.state.producto.map((data,index) => (
            <ProductList data={data} index={index} addItem={()=>this.addItem(data.price,data)}/>
            ));

         const shoppingCart = this.state.productSelect.map((data,index) => (
            <ShoppingCart data={data} index={index} removeItem={()=>this.removeItem(index,data.price)}/>
         ));

     return (
            <div>
                    <div className="content">
                        <h1>Total:${this.state.total} </h1>
                    </div>
                    <div className="content">
                        <h1>Carrito de compras</h1>
                        {shoppingCart}
                    </div>
                    <div className="content">
                        <h1>Productos</h1>
                        {productList}
                    </div>
                </div>
                )
            }
        };

    export default Index;