import React from 'react'
import { Link } from "react-router-dom";




function Home() {

  return (
    <div className="container">
        <div className='home'>
      <div className='welcome'>
      <h2>Välkommen till Freaky Fashion </h2>
      <p>Din lokala Fashion butik</p>
      <h2>Produkt Meny</h2>
      <div className='menu'>
          <button >
          <Link to="/newProduct">1.Ny Product</Link>
          </button>
          <button>
          <Link to="/searchProduct">2.Sök Product</Link>
          </button>
          <button>
          <Link to="/searchProduct">3.Sök Product</Link>
          </button>
          <button>
          <Link to="/searchProduct">4.Sök Product</Link>
          </button>

          </div>
          </div>
          <div className='body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur assumenda temporibus doloribus, distinctio quis nobis delectus at placeat vitae molestiae soluta minus nesciunt cupiditate ea adipisci error libero totam nulla.</p>
          </div>


      </div>
      <div></div>


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