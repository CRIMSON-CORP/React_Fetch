import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function FetchCall() {
            var Response = await fetch("https://fakestoreapi.com/products/");
            var Data = await Response.json();
            await Promise.resolve(setProducts(Data));
        }
        FetchCall();
    });

    var productsJSX = products.map(({ id, image, title, price }, index) => {
        return (
            <div className="item" key={id}>
                <img src={image} alt="" />
                <div className="details">
                    <h4 className="name">{title}</h4>
                    <p className="price">${price}</p>
                </div>
                <div className="button">&#43;</div>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="header">
                <h2>Product List</h2>
            </div>
            <div className="wrapper">
                <div className="inner-wrapper">{productsJSX}</div>
            </div>
        </div>
    );
}

export default App;
