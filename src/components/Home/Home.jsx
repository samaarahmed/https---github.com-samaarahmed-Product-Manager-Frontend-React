import React from 'react'
import { Link } from "react-router-dom";




function Home() {

  return (
    <div className="container">
    <body>
      <div className='welcome'>
      <h1>Välkommen till Freaky Fashion </h1>
      <p>Din lokala Fashion butik</p>
      <h2>Produkt Meny</h2>
        <button>
        <Link to="/product">Product</Link>
          </button>

      </div>
    </body>
  <footer>
    <div className="adress">
      <h4>Städafint AB</h4>
      <p>Storgatan 82 35245 Växjö</p>
    </div>
    <div className="telfon">
      <p>Epost:stadafint@stadafint.se</p>
      <p>Telfon: 0470-8880,0740-858585</p>
    </div>

  </footer>
</div>
  )
}

export default Home