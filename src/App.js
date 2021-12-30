
import './App.css';
import Routers from './Routers';
import { useEffect, useState } from 'react';
import ProductAPI from './api/productAPI';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api
    const getProduct = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, [])
  return (
    <div className="App container">
      <Routers products={products} />
    </div>
  );
}

export default App;
