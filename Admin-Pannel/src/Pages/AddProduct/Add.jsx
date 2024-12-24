import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [data, setdata] = useState();
  const [title, settitle] = useState();
  const [price, setprice] = useState();
  const [pic, setpic] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/get").then(data => setdata(data.json()))
  }, [])
  console.log(data);


  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    });

    if (response.ok) {
      console.log("Product added successfully");
    } else {
      console.error("Failed to add product");
    }
  };


  return (
    <>
      <center>
        <h1>Admin page</h1>
        <form onSubmit={submit} method="POST">
          <input
            type="text"
            placeholder="product name"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="pic">upload image </label>
          <input type="text" name="pic"
            value={pic}
            onChange={(e) => setpic(e.target.value)}
          />
          <br />
          <br />

          <input type="submit" value="click" />
        </form>
      </center>
    </>
  );
};
export default AddProduct;