import { useContext, useEffect, useState } from "react";
import { data, bestSellers, newArrivals } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils/Toast";
import { CartContext } from "../../context/CartContext";

const TrendingProducts = () => {
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const combineProducts = [...data, ...newArrivals, ...bestSellers];
    const findProd = combineProducts.filter((item) => item.trending);
    setTrending(findProd);
  }, []);

  return (
    <div>
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl lg:font-bold md:font-bold sm:font-medium mt-20 py-5 mb-5 text-grayForPageHeading lg:px-16 sm:px-5">
          | Trending Products
        </h1>
      </div>

      <div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:px-16
        sm:px-5 "
      >
        {trending.length > 0 ? (
          trending.map((item) => (
            <div
              key={item.id}
              className="relative bg-white-400 border border-gray-400 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col justify-between gap-5">
                {/* Discount Badge */}

                <div className="absolute top- left-0 bg-green-400 text-white-400 text-xs font-bold px-3 py-1 rounded-br-xl z-10">
                  TRENDING
                </div>

                {/* Product Image */}
                <div
                  className="cursor-pointer relative group"
                  onClick={() => navigate(`/products-details/${item.id}`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 m-auto mt-5 h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="line-through text-red-500">
                          ₹{item.price}
                        </span>
                        <span className="ml-2 text-gray-800 font-medium">
                          ₹{item.discountedPrice} / {item.unit}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < item.reviews
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.572L24 9.748l-6 5.849 1.416 8.268L12 18.896l-7.416 4.969L6 15.597 0 9.748l8.332-1.589z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">
                      ({item.reviews})
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="p-5 pt-0">
                  <button
                    className="w-full bg-green-400 text-white-400 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                    onClick={() => {
                      addToCart(item);
                      handleSuccess(`${item.name} added to Cart`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 text-lg">
            No products found :(
          </p>
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;