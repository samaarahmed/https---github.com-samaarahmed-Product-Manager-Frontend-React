import { useState} from 'react';
import '../Product/NewProduct.css'
import Dialog from '@material-ui/core/Dialog'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Product from './Product';


const NewProduct = () => {
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClickToOpen = (event) => {
    event.preventDefault();

    setOpen(true);

  }

   const handleToClose = () => {

      setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = { ...form, type: parseInt(form.type) };
    addNew(product)
    handleToClose(event)
  }


  const addNew = (addNew) => {

    fetch("https://localhost:8000/product", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(addNew)

    })

    
    .then(resp => resp.json())
    .then(addNew => setProducts([...products, addNew]));
  
    
 }

    const [form, setForm] = useState({
        name: "",
        sku: "",
        beskrivning: "",
        bild: "",
        pris: "",
      });
    
    
       
  return (
    <div className='container'>
      <div className='table'>
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
  <div/>
  <div className='form'>

  <form  >
    <div>
  <label htmlFor='name'>Nam</label>
  <input  type="text"  name="name"  value={form.name}  onChange={(event) =>  setForm({...form, name: event.target.value,
      })
    }
  />
  </div>
    <div>
  <label htmlFor='sku'>Sku </label>
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
</div>
<div>
  <label htmlFor='besekrivning'>Bes </label>
  <input 
    type="text" 
    name="besekrivning" 
    value={form.beskrivning}
    onChange={(event) =>
        setForm({
          ...form,
          beskrivning: event.target.value,
        })
      } />
</div>
<div>
  <label htmlFor='bild'>Bild </label>
  <input
    type="text"
    name="bild"
    value={form.bild}
    onChange={(event) =>
        setForm({
          ...form,
          bild: event.target.value,
        })
      }
  />
  </div>
  <div>
  <label htmlFor='pris'>Pris </label>
  <input
    type="text"
    name="pris"
    value={form.pris}
    onChange={(event) =>
        setForm({
          ...form,
          pris: event.target.value,
        })
      }
  />
</div>
<div>
  <button onClick ={handleClickToOpen}>Lägg till</button>
  <div/>
  <div>
  <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"är detta korrekt?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Click on Add again to confirm!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button  onClick={handleSubmit}
                        color="secondary" autoFocus>
                        Add
                    </Button>

                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            </div>
            </div>

</form>
</div>
</div>
</div>

  )
}

export default NewProduct
