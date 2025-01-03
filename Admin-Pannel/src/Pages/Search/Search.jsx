import React, { useState } from 'react';
import './Search.css';

const SearchProduct = () => {
    const [id, setId] = useState(''); // For storing product ID input
    const [products, setProducts] = useState([]); // For storing the fetched products

    const handleSearch = async (e) => {
        e.preventDefault();

        // Check if ID is provided
        if (!id) return;

        // Check if the product already exists in the products list by comparing IDs
        const existingProduct = products.find((product) => product.id === id);

        // If product already exists, show alert and exit
        if (existingProduct) {
            alert('Product is already displayed!');
            setId(''); // Clear the input after alert
            return;
        }

        // Fetch product details from the server
        const response = await fetch(`http://localhost:3000/search/${id}`);

        if (response.ok) {
            const product = await response.json();

            // If product exists in response, add it to the list
            if (product) {
                setProducts((prevProducts) => [...prevProducts, product]);
            } else {
                alert('Product not found');
            }
        } else {
            alert('Failed to fetch product');
        }

        setId(''); // Clear input after search
    };

    return (
        <div className="search-container">
            <h2>Search Product</h2>
            <form onSubmit={handleSearch}>
                {/* <label htmlFor="productId">Enter Product ID to Search:</label> */}
                <input
                    id="search-productId"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter Product ID"
                    required
                />
                <button type="submit" className='search-btn'>Search</button>
            </form>

            <div className="product-container">
                {products.length === 0 ? (
                    <p className="no-products">No products found. Start searching!</p>
                ) : (
                    <div>
                        {products.map((product) => (
                            <div className="searc-product" key={product.id}>
                                <h3>Product ID: {product.id}</h3>
                                <p><strong>Title:</strong> {product.title}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Description:</strong> {product.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchProduct;
