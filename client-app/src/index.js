import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import CategoryList from './pages/CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <BrowserRouter>
      <div className="container py-3">
        <nav className="mb-3">
          <Link to="/" className="me-3">Products</Link>
          <Link to="/categories">Categories</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/products/new" element={<ProductForm/>} />
          <Route path="/products/edit/:id" element={<ProductForm/>} />
          <Route path="/categories" element={<CategoryList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
