import React, { useState } from 'react';

const Deletepro = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/delete/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Product deleted successfully');
    } else {
      alert('Failed to delete product');
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <form onSubmit={handleDelete}>
        <label>Enter Product ID to Delete:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Product ID"
          required
        />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default Deletepro;
