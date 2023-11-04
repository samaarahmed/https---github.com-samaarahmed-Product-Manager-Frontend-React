import { findByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import '../Product/SearchProduct.css'
import Dialog from '@material-ui/core/Dialog'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";



const SearchProduct = () => {

  const [foundProducts, setFoundProducts] = useState([]);


    const [open, setOpen] = useState(false);
 
    const handleClickToOpen = () => {

        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };


  const find = (productToFind) => {
  

    fetch(`https://localhost:8000/product/${productToFind}`,{
      method:"get",
    })
    .then((resp) => {
      if (!resp.ok) {
        alert('Product not found');
      } 
      return resp
  })
    .then((resp) => resp.json())
  
    .then(productToFind => setFoundProducts([productToFind]));
  
    
    console.log(productToFind)
  
    }

    const deleteProduct = (productToDelete)=>{
      fetch(`https://localhost:8000/product/${productToDelete}`,{
        method: "delete"
      }).then(() => {
        
        var newProducts = foundProducts.filter(x => x.id != productToDelete);

        alert("Product deleted")
  
        setFoundProducts(newProducts);
  
      });
  

    }
  


    const [form, setForm] = useState({
        sku: "",
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const searchProduct = { ...form, };
    
        find(searchProduct.sku);
        console.log(searchProduct.sku)
      }





    return (
        
    <div className='Search-container'>
            <div className='table'>
    <table className='get-products'>  
    <thead>
    <tr>
      <th>Namn</th>
      <th>Sku</th>
      <th>Beskrivning</th>
      <th>Bild</th>
      <th>Pris</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
    {foundProducts.map((product)=>(
      <tr key={product.id}>
        <td> {product.name}</td>
        <td> {product.sku}</td>
        <td> {product.beskrivning}</td>
        <td> {product.bild}</td>
        <td> {product.pris}</td>
        <td> <button onClick={handleClickToOpen}>Delete</button></td>
        <td>      <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Delete product?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Click on Delete again to confirm!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>deleteProduct(product.id)}
                        color="secondary" autoFocus>
                        Delete
                    </Button>

                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
</td>


      </tr>
      
      ))
    }
  </tbody>
  </table>
  <div/>

    <form onSubmit={handleSubmit}>

  <label>Sku</label>
  <input
    type="text"
    name="sku"
    value={form.sku}
    onChange={(event) =>
      setForm({
        ...form,
        sku: event.target.value,
      })
    }
  />

  <button>Sök</button>
</form>
</div>


        </div>
    );
};

export default SearchProduct;