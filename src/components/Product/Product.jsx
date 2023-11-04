import React from 'react';
import { useEffect, useState } from "react";

import '../Product/Product.css'
import NewProduct from './NewProduct';
import SearchProduct from './SearchProduct';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);



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

 const find = (productToFind) => {
  

  fetch(`https://localhost:8000/product/${productToFind}`,{
    method:"get",
  })
  .then((resp) => resp.json())

  .then(productToFind => setFoundProducts([productToFind]));

  


    console.log(productToFind)




}

  useEffect(() => {
  }, []);

  return (
    <div className='table-container'>
    <table className='get-products'>  
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
  <table className='found-products'>  
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
    {foundProducts.map((found)=>(
      <tr key={found.id}>
        <td> {found.name}</td>
        <td> {found.sku}</td>
        <td> {found.beskrivning}</td>
        <td> {found.bild}</td>
        <td> {found.pris}</td>

      </tr>
      ))
    }
  </tbody>
  </table>

  <SearchProduct find = {find}/>

  </div>
  );
}
export default Product;
