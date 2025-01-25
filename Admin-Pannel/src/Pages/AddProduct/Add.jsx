import React, { useState } from "react";
import './Add.css';

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
    const response = await fetch("https://node-setup-for-project.vercel.app/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price, description, image }),
    });

    if (response.ok) {
      alert("Product added successfully");
      console.log("Product added successfully");
    } else {
      console.error("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Admin Page</h1>
      <form onSubmit={submit} className="add-product-form">
        <label htmlFor="title" className="add-product-label">Product Title</label>
        <input
          id="title"
          className="add-product-input"
          type="text"
          placeholder="Product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="price" className="add-product-label">Product Price</label>
        <input
          id="price"
          className="add-product-input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label htmlFor="desc" className="add-product-label">Product Description</label>
        <input
          id="desc"
          className="add-product-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label htmlFor="image" className="add-product-label">Image URL</label>
        <input
          id="image"
          className="add-product-input"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <input type="submit" className="add-product-btn" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
