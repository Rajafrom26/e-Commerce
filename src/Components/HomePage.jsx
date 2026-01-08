import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux-Tools/ProductSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { error, isLoading, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading)
    return (
      <p className="flex justify-center align-center mt-44 text-2xl py-40">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center mt-44 text-2xl text-red-600">
        Error: {error}
      </p>
    );

  return (
    <div className="flex flex-wrap justify-center mt-3 mb-3 p-4 gap-y-6">
      {products.map((item) => (
        <Link
          to={`/products/${item.id}`}
          key={item.id}
          className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col"
        >
          <div className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
            {/* Image Container */}
            <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="text-center mt-auto">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1 block">
                {item.category}
              </span>
              <h3 className="text-gray-800 font-medium text-sm line-clamp-2 mb-2 px-2">
                {item.title}
              </h3>
              <p className="text-xl font-black text-gray-900">${item.price}</p>
            </div>

            {/* Hidden "View Detail" hint that appears on hover */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-blue-600 text-xs font-bold flex items-center gap-1">
                View Details
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
