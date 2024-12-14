import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Add() {
  const [formData, setFormData] = useState({
    productName: '', 
    image: '', 
    price: '', 
    category: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign:"center"}}>
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <input type="text" name="product" placeholder="Product Name" value={formData.productName} onChange={handleChange} style={{ margin: '10px', padding: '10px', width: '300px'}}/>
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} style={{ margin: '10px', padding: '10px', width: '300px'}}/>
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} style={{ margin: '10px', padding: '10px', width: '300px'}}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} style={{ margin: '10px', padding: '10px', width: '300px'}}/>
          <button type="submit" style={{ padding: '10px 20px', margin: '10px', backgroundColor: 'pink', border: 'red', borderwidth:"5px", borderRadius: '5px', cursor: 'pointer'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
