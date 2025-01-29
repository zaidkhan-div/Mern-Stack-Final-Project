import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ProductsContext = createContext();

// Provider component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch('https://node-setup-for-project.vercel.app/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        console.log('This is global Context');
    }, []);
    // console.log(products);
    


    return (
        <ProductsContext.Provider value={{ products, loading }}>
            {children}
        </ProductsContext.Provider>
    );
};
