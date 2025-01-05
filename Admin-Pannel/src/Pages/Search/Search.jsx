import React, { useState, useEffect } from 'react';
import './Search.css';

const SearchProduct = () => {
    const [id, setId] = useState('');
    const [products, setProducts] = useState([]);

    // Load products from localStorage on component mount
    // useEffect(() => {
    //     const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    //     setProducts(savedProducts);
    // }, []);

    // const handleDelete = (id) => {
    //     // const productToDelete = products.find((product) => product.id === id);
    //     // if (productToDelete) {
    //     //     const updateProduct = products.filter((item) => item.id !== id)
    //     //     setProducts(updateProduct);
    //     //     localStorage.setItem('products', JSON.stringify(updateProduct));
    //     // }
    //     setProducts((prevProduct) => prevProduct.filter((item) => item.id !== id))
    //     setId('')
    // };

    // Save products to localStorage whenever the products state changes
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!id) return;

        const existingProduct = products.find((product) => product.id === id);

        if (existingProduct) {
            alert('Product is already displayed!');
            setId('');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/search/${id}`);
            if (response.ok) {
                const product = await response.json();

                if (product) {
                    setProducts((prevProducts) => [...prevProducts, product]);
                } else {
                    alert('Product not found');
                }
            } else {
                alert('Failed to fetch product');
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            alert('Error fetching product');
        }

        setId('');
    };

    return (
        <div className="search-container">
            <div className="search-form">
                <h2>Search Product</h2>
                <form onSubmit={handleSearch}>
                    <input
                        id="search-productId"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter Product ID"
                        required
                    />
                    <button type="submit" className="search-btn">Search</button>
                    </form>
            </div>
            <div className="products-container">
                {products.length === 0 ? (
                    <p className="no-products">No products found. Start searching!</p>
                ) : (
                    products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchProduct;
