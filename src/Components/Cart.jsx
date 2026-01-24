import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../Redux-Tools/CartSlice";
import { AnimatePresence, motion } from "framer-motion";
import QuantityDisplay from "./QuantityDisplay";

const Cart = () => {
  const { items, totalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <div>
      {items && items.length > 0 ? (
        <>
          <h1 className="w-fit mx-auto mt-20 mb-10 text-2xl text-green-400 border-b-2 border-current font-bold">
            Total Price: ${Math.round(totalAmount)}
          </h1>

          <section className="flex flex-row flex-wrap justify-center gap-8 m-10">
            {items.map((item) => (
              <div className="flex flex-col md:flex-row items-center p-6 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition max-w-2xl">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain mb-4 md:mb-0 md:mr-6"
                />

                {/* Product Details */}
                <div className="flex flex-col flex-1 gap-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                  <p className="text-green-600 font-bold">
                    Subtotal: ${Math.round(item.totalPrice)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => addItem(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
                    >
                      +
                    </button>

                    <QuantityDisplay quantity={item.quantity} />

                    <button
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition"
                    >
                      –
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-40 px-4 py-24">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8 text-center">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
