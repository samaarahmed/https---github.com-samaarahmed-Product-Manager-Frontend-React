import { useState } from 'react';


const NewProduct = ({addNew}) => {
    const [form, setForm] = useState({
        name: "",
        sku: "",
        beskrivning: "",
        bild: "",
        pris: "",
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const product = { ...form, type: parseInt(form.type) };
        console.log(product)
    
        addNew(product);
      }
    
       
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
  <label>Name</label>
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={(event) =>
      setForm({
        ...form,
        name: event.target.value,
      })
    }
  />

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

  <label>Beskrivning</label>
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

  <label>Bild</label>
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
        <label>Pris</label>
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


  <button>Lägg till</button>
</form>

        
    </div>
  )
}

export default NewProduct
