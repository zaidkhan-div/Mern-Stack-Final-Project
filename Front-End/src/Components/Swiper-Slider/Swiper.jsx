import React from 'react';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductsContext } from '../Context/ProductsContext';

function Carousal() {
    const { products, loading } = useContext(ProductsContext);

    const limitedProducts = products.slice(0, 4)

    if (loading) {
        return <p>Loading...</p>; // Show loading state
    }

    // Limit the items to the productLimit number

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}  // Continuous loop
            breakpoints={{
                320: {
                    slidesPerView: 1, // 1 slide for small screens
                },
                640: {
                    slidesPerView: 2, // 2 slides for medium screens
                },
                1024: {
                    slidesPerView: 3, // 3 slides for large screens
                },
            }}
        >
            {limitedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="card-content">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
}

export default Carousal;
