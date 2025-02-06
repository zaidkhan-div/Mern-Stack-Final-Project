import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    totalQuantity: JSON.parse(localStorage.getItem('totalQuantity')) || 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     let find = state.cart.findIndex((item) => item.id === action.payload.id);
        //     if (find >= 0) {
        //         state.cart[find].quantity += 1;
        //     } else {
        //         state.cart.push({
        //             ...action.payload,
        //             quantity: 1
        //         });
        //         localStorage.setItem('cart', JSON.stringify(state))
        //     }
        //     // state.cart.push({
        //     //     ...action.payload,
        //     //     quantity: 1, // Set quantity to 1 for new items
        //     // });
        // },
        // removeItem: (state, action) => {
        //     const updateRemove = state.cart.filter((item) => item.id !== action.payload);
        //     localStorage.setItem('cart', JSON.stringify(updateRemove))
        //     return updateRemove
        // },
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            // Save ONLY the cart array to localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeItem: (state, action) => {
            const updateRemove = state.cart.filter((item) => item.id !== action.payload);
            // Update the state and save the new cart 
            state.cart = updateRemove;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        increasementQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },

        decreasementQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                }, {
                totalPrice: 0,
                totalQuantity: 0,
            }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        }

    }
})
export const { addToCart, removeItem, increasementQuantity, decreasementQuantity, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
