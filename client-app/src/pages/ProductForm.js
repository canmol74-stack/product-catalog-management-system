import React, {useEffect, useState} from 'react';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductForm(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [model, setModel] = useState({ name:'', description:'', price:0, categoryId:0 });
  useEffect(()=>{ fetchCategories(); if(id) fetchProduct(); }, []);
  const fetchCategories = async ()=> {
    const res = await api.get('/categories');
    setCategories(res.data);
  };
  const fetchProduct = async ()=> {
    try {
      const res = await api.get('/products/'+id);
      setModel(res.data);
    } catch(e){ console.error(e); alert('Failed to load product'); }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      if(id) await api.put('/products/'+id, model);
      else await api.post('/products', model);
      navigate('/');
    } catch(e){ console.error(e); alert('Failed to save'); }
  };
  return (
    <div>
      <h3>{id ? 'Edit' : 'Add'} Product</h3>
      <form onSubmit={submit}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input className="form-control" value={model.name} onChange={e=>setModel({...model, name:e.target.value})} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <input className="form-control" value={model.description||''} onChange={e=>setModel({...model, description:e.target.value})} />
        </div>
        <div className="mb-2">
          <label className="form-label">Price</label>
          <input type="number" step="0.01" className="form-control" value={model.price} onChange={e=>setModel({...model, price:parseFloat(e.target.value)})} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Category</label>
          <select className="form-select" value={model.categoryId} onChange={e=>setModel({...model, categoryId:parseInt(e.target.value)})} required>
            <option value={0}>Select</option>
            {categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}
