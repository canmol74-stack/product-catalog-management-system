import React, {useEffect, useState} from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

export default function ProductList(){
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  useEffect(()=>{ fetchData(); fetchCategories(); }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api.get('/products', { params: { categoryId: categoryFilter || undefined, sortBy } });
      setProducts(res.data);
    } catch(e){
      console.error(e);
      alert('Failed to load products');
    } finally { setLoading(false); }
  };
  const fetchCategories = async () => {
    try {
      const res = await api.get('/categories');
      setCategories(res.data);
    } catch(e){ console.error(e); }
  };
  useEffect(()=>{ fetchData(); }, [categoryFilter, sortBy]);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Products</h3>
        <Link to="/products/new" className="btn btn-primary">Add Product</Link>
      </div>
      <div className="mb-3 d-flex gap-2">
        <select className="form-select w-auto" value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select className="form-select w-auto" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      {loading ? <div>Loading...</div> :
      <table className="table">
        <thead><tr><th>Name</th><th>Category</th><th>Price</th><th></th></tr></thead>
        <tbody>
          {products.map(p=> (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.categoryName}</td>
              <td>{p.price}</td>
              <td><Link to={'/products/edit/'+p.id} className="btn btn-sm btn-outline-secondary">Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}
