import React, {useEffect, useState} from 'react';
import api from '../api';
export default function CategoryList(){
  const [categories, setCategories] = useState([]);
  useEffect(()=>{ fetch(); }, []);
  const fetch = async ()=> {
    const res = await api.get('/categories');
    setCategories(res.data);
  };
  return (
    <div>
      <h3>Categories</h3>
      <ul className="list-group">
        {categories.map(c=> <li key={c.id} className="list-group-item">{c.name}</li>)}
      </ul>
    </div>
  );
}
