
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
  const onHandleAdd = async (product) => {
    try {
      console.log(product)
      const { data } = await ProductAPI.add(product);
      console.log(data)
      setProducts([
        ...products,
        data
      ]);
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }

    // console.log(todos);
  }
  return (
    <div className="App container">
      <Routers products={products} list={products} onDelete={onHandleDelete} onAdd={onHandleAdd} />
    </div>
  );
}

export default App;
