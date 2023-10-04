import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8000/product")
      .then((resp) => resp.json())

      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Product products={products} />
    </div>
  );
}

export default App;
