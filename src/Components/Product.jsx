import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Redux-Tools/ProductDetailSlice";
import CartSlice, { addItemToCart } from "../Redux-Tools/CartSlice";
import Magnifier from "../Magnifier/Magnifier";

const Product = () => {
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (isLoading)
    return (
      <p className="flex justify-center align-center mt-44 text-2xl py-20">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center mt-44 text-2xl text-red-600 py-20">
        Error: {error}
      </p>
    );

  const Handler = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 md:mt-10 mb-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="group rounded-xl bg-gray-50 p-4 relative z-10">
        {" "}
        {/* Removed overflow-hidden */}
        <Magnifier
          src={product.image}
          zoom={3}
          width="256px" // matches w-64
          height="320px" // matches h-80
          className="mix-blend-multiply hover:object-center my-product-zoom"
        />
      </div>
      {/* Content Section */}
      <div className="flex flex-col flex-1">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
          New Arrival
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
          {product.title}
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            In Stock
          </span>
        </div>

        <p className="text-base text-gray-500 leading-relaxed max-w-md border-t pt-4 border-gray-100">
          {product.description}
        </p>

        {/* Dynamic Action Button */}
        <button
          type="button"
          disabled={added}
          onClick={Handler}
          className={`px-8 py-4 mt-8 font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 
        ${
          added
            ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
            : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 focus:ring-blue-300"
        }`}
        >
          <div className="flex items-center justify-center gap-2">
            {added ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Added to Cart
              </>
            ) : (
              "Add to Cart"
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
