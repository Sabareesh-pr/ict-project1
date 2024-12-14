import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1 >Products</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto', gap: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor: 'white', display:"flex", justifyContent:"space-evenly"}}>
              <div style={{width:"50px"}}> <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} /></div>
              <div style={{width:"840px", textAlign:"left"}}><h3 style={{ fontSize: '16px'}}>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p style={{ color: 'blue'}}>Category: {product.category}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
