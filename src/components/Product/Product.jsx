import React from 'react';
import './Product.css'

const Product = ({products}) => {
  return (
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
      <tr>
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
  );
}
export default Product;
