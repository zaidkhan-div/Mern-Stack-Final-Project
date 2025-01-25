import React, { useState } from 'react';
import './Delete.css';

const Deletepro = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://node-setup-for-project.vercel.app/delete/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Product deleted successfully');
      setId('');
    } else {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="delete-container">
      <h2 className="delete-title">Delete Product</h2>
      <form className="delete-form" onSubmit={handleDelete}>
        <label htmlFor="delete-input" className="delete-label">
          Enter Product ID to Delete:
        </label>
        <input
          id="delete-input"
          className="delete-input"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Product ID"
          required
        />
        <button type="submit" className="delete-btn">
          Delete Product
        </button>
      </form>
    </div>
  );
};

export default Deletepro;
