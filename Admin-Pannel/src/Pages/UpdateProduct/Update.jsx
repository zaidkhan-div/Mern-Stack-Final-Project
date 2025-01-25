import React, { useState } from 'react';
import './Update.css';

const UpdateProduct = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setId('');
    setTitle('');
    setPrice('');
    setDescription('');


    const productData = { title, price, description };

    try {
      const response = await fetch(`https://node-setup-for-project.vercel.app/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        setMessage('Product updated successfully!');
      } else {
        setMessage('Failed to update product.');
      }
    } catch (err) {
      console.error(err);
      // setMessage('Error updating product.');
    }
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Product</h2>
      <form className="update-form" onSubmit={handleUpdate}>
        <label>
          Product ID:
          <input
            type="text"
            className="update-input"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Product ID"
            required
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            className="update-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Product Title"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            className="update-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Product Price"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            className="update-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Product Description"
            required
          />
        </label>
        <button type="submit" className="update-btn">
          Update Product
        </button>
      </form>
      {message && (
        <p className={`update-message ${message.includes('Failed') || message.includes('Error') ? 'error' : ''}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default UpdateProduct;
