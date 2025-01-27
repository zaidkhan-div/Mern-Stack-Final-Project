import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Carousal({ items, loading, dispatch, addToCart, productLimit }) {
  const limitedItems = items.slice(0, productLimit);  // Limit the number of products

  return (
    <Swiper spaceBetween={20} slidesPerView={productLimit}>
      {loading ? (
        <SwiperSlide>
          <p style={{ fontSize: "3.5rem", textAlign: "center", marginTop: "5.5rem" }}>Loading...</p>
        </SwiperSlide>
      ) : (
        limitedItems.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="product-card">
              <div className="product-image">
                <img src={data.image} alt="Product Image" />
              </div>
              <div className="card-content">
                <h3 className="product-title">{data.title}</h3>
                <p className="product-desc">{data.description}</p>
                <p className="product-price">${data.price}</p>
                <button className="add-to-cart" onClick={() => dispatch(addToCart(data))}>Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

export default Carousal;
