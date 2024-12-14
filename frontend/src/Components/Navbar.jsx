import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '50px', backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>My App</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ padding: '10px 15px', backgroundColor: 'white', borderRadius: '5px', fontSize: '15px', fontWeight: 'bold' }}>Home</Link>
        <Link to="/add-product" style={{ padding: '10px 15px', backgroundColor: 'white', borderRadius: '5px', fontSize: '15px', fontWeight: 'bold' }}>Add Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
