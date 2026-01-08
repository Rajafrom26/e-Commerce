import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../Redux-Tools/CartSlice";

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      {items && items.length > 0 ? (
        <>
          <h1 className="w-fit mx-auto mt-20 mb-10 text-2xl text-green-400 border-b-2 border-current font-bold">
            Total Price: ${Math.round(totalAmount)}
          </h1>

          {/* Items Grid */}
          <section className="flex flex-row flex-wrap justify-center gap-8 m-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-row p-4 rounded-xl shadow-lg w-full md:w-2/5 justify-around border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-5/12 h-44 object-contain p-2 border-r border-indigo-100"
                />
                <section className="flex flex-col justify-between p-2">
                  <div>
                    <p className="font-semibold text-gray-600">
                      {item.quantity === 1 ? "Product" : "Products"}:{" "}
                      {item.quantity}
                    </p>
                    <p className="text-xl font-bold mt-2">
                      Total:{" "}
                      <span className="text-indigo-600">
                        ${Math.floor(item.totalPrice)}
                      </span>
                    </p>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-black text-white py-2 px-4 rounded transition-colors duration-300"
                    onClick={() => removeHandler(item.id)}
                  >
                    Remove Item
                  </button>
                </section>
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
