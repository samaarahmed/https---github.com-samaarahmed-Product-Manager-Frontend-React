import React from 'react';
import { useEffect, useState } from "react";

import '../Product/Product.css'
import NewProduct from './NewProduct';

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    fetch("https://localhost:8000/product")
      .then((resp) => resp.json())

      .then((products) => setProducts(products));
  };

  const addNew = (product) => {
    fetch("https://localhost:8000/product", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product)

    })
    
    .then(resp => resp.json())
    .then(product => setProducts([...products, product]));
    
 }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='table-container'>
    <table>  
    <thead>
    <tr>
      <th>Namn</th>
      <th>Sku</th>
      <th>Beskrivning</th>
      <th>Bild</th>
      <th>Pris</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product)=>(
      <tr key={product.id}>
        <td> {product.name}</td>
        <td> {product.sku}</td>
        <td> {product.beskrivning}</td>
        <td> {product.bild}</td>
        <td> {product.pris}</td>

      </tr>
      ))
    }
  </tbody>
  </table>
  <NewProduct addNew = {addNew}/>

  </div>
  );
}
export default Product;
