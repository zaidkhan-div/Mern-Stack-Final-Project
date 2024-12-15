import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const Cart = () => {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)



  return (
    <div>
      <div className="cart-hero">
        <h1>Shopping Cart</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Shopping Cart</p>
          </div>
        </div>
      </div>
      {/* <div className="cart-items-section">
        <div className="cart-products-section">
          <div className="cart-product-title">
            <div className="cart-product-image">
              <h1>Image</h1>
            </div>
            <div className="cart-product-price">
              <div className='cart-product-price'><p>Price</p></div>
              <div className='cart-product-quantity'><p>Quantity</p></div>
              <div className='cart-product-price'><p>Total Price</p></div>
            </div>
          </div>
          <div className="cart-product-tabs">
            <div className="cart-product">
              <h1>AddedProd</h1>
            </div>
            <div className="cart-product-details">
              <div className="cart-price">Price</div>
              <div className="cart-price"></div>
            </div>
          </div>
        </div>
        <div className="order-summary-section"></div>
      </div> */}


      {/* Cart-Items Ui */}

      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  <div className="card-body">
                    {cart?.map((data) => (
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.img}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{data.title}</strong>
                          </p>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem(data.id))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                                onChange={() => null}
                              />
                              <label className="form-label" for="form1">
                                Quantity
                              </label>
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>{data.price}</strong>
                          </p>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total Quantity
                        <span>{totalQuantity}</span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>{totalPrice}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*  Cart-Item Ui Ends Here */}

    </div>
  )
}

export default Cart;
