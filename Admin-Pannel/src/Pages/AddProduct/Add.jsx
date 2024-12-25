import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setTitle('')
    setPrice('')
    setDescription('')
    setImage('')
    const response = await fetch("http://localhost:3000/admin", {
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
    <>
      <center>
        <h1>Admin Page</h1>
        <form onSubmit={submit} method="POST">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            placeholder="Product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="desc">Product Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Add Product" />
        </form>
      </center>
    </>
  );
};

export default AddProduct;
