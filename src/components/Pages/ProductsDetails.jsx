import { useNavigate, useParams } from "react-router-dom";
import { data, newArrivals, bestSellers } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { handleSuccess } from "../../utils/Toast";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);
  const [related, setRelated] = useState([]);

  const combinedProducts = [...data, ...newArrivals, ...bestSellers];

  useEffect(() => {
    const foundProduct = combinedProducts.find((item) => item.id === id);
    setproduct(foundProduct);
  }, [id]);

  // Fetch related products
  useEffect(() => {
    if (product) {
      const findRelated = combinedProducts.filter(
        (item) =>
          item.id !== product.id && // Exclude the current product
          (item.category === product.category || // Same category
            item.brand === product.brand || // Same brand
            item.name.toLowerCase().includes(product.name.toLowerCase())) // Related by name
      );
      setRelated(findRelated);
    }
  }, [product]);

  const { addToCart } = useContext(CartContext);

  const handleMoreInfo = () => {
    setInfo(!info);
  };

  return (
    <div>
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-6 lg:px-16 sm:px-4 pt-10">
        <button
          className="flex items-center gap-2 text-gray-600 text-xl"
          onClick={() => navigate("/")}
        >
          <IoMdArrowRoundBack className="text-2xl" />
          Back to All Products
        </button>
      </div>
      {/* Product Details */}
      <div className="flex flex-col items-center py-2 px-4 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 lg:max-w-4xl md:max-w-xl md:flex md:flex-row w-full bg-white-400 rounded-lg border border-gray-400 overflow-hidden">
          {/* Image Section */}
          <div className="p-6">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full md:w-[200px] sm:w-[200px]  h-auto rounded-lg object-cover border border-gray-300"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 p-6 space-y-5">
            {/* Product Name */}
            <div className="text-grayForPageHeading">
              <h1 className="text-4xl font-bold mb-2">{product?.name}</h1>
              <p>By {product?.brand}</p>
            </div>
            {/* Price */}
            <div>
              <div className="text-lg text-gray-600 mb-0 flex items-center">
                <p className="line-through text-red-500 mt-1">
                  ₹{product?.price}
                </p>
                <p className="text-3xl text-green-400 font-semibold ml-2">
                  ₹{product?.discountedPrice}
                </p>
                {product?.discount > 0 ? (
                  <p className="ml-5 font-semibold bg-green-400 text-white-400 px-2 rounded-md text-[10px]">
                    {product?.discount}% OFF
                  </p>
                ) : (
                  <p className="ml-5 font-semibold bg-red-500 text-white-400 px-2 rounded-md text-[10px]">
                    NO OFF
                  </p>
                )}
              </div>
              <div className="text-grayForPageHeading text-[12px] flex gap-3 mt-3">
                {product?.unit.map((unit, idx) => (
                  <p
                    key={idx}
                    className="border border-green-400 cursor-pointer px-2 py-1 rounded-lg font-medium"
                  >
                    {unit}
                  </p>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product?.description}</p>
            {/* Buttons */}
            <div className="flex items-center gap-4 mb-20">
              <button
                onClick={() => {
                  addToCart(product);
                  handleSuccess(`${product?.name} added to Cart`);
                }}
                className="bg-green-400 text-white-400 py-2 px-4 rounded-md hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>

            {/* More Info */}
            <div className="border-t border-gray-400 text-grayForPageHeading  py-3">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-medium mb-5">More Info </h1>
                {info ? (
                  <TiArrowSortedUp
                    className="mb-5 text-2xl cursor-pointer"
                    onClick={handleMoreInfo}
                  />
                ) : (
                  <TiArrowSortedDown
                    className="mb-5 text-2xl cursor-pointer"
                    onClick={handleMoreInfo}
                  />
                )}
              </div>
              {info && (
                <div className="space-y-5">
                  <div>
                    <p className="text-green-400 text-[18px]">Nutrients</p>
                    <p className=" ml-5">
                      1) Protein : {product?.nutrients?.protein}
                    </p>
                    <p className="ml-5">
                      2) Carbohydrates : {product?.nutrients?.carbohydrates}
                    </p>
                    <p className="ml-5">3) Fats : {product?.nutrients?.fats}</p>
                  </div>
                  <div className="space-y-5">
                    <p>
                      <span className="text-green-400 text-[18px]">
                        Mfg Date :
                      </span>{" "}
                      <span>{product?.manufactureDate}</span>
                    </p>
                    <p>
                      <span className="text-green-400 text-[18px]">
                        Life Span :
                      </span>{" "}
                      <span>{product?.lifespan}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-green-400 text-[18px]">
                      Storage Instructions :{" "}
                      <span className="text-[18px] text-grayForPageHeading">
                        {product?.additionalInfo}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="lg:text-3xl sm:text-2xl font-semibold pb-5 text-grayForPageHeading lg:px-16 sm:px-4">
          | Related Products{" "}
          <span className="text-xs">(According to Category, Name, Brands)</span>
        </h2>

        <div className="grid lg:gap-10 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-4 lg:px-16">
          {related.length > 0 ? (
            related.map((item) => (
              <div
                key={item.id}
                className="relative bg-white-400 border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between gap-5"
              >
                {/* Discount Badge */}
                {item.discount > 0 ? (
                  <div className="absolute top-0 left-0 bg-green-400 text-white-400 text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                    {item.discount}% OFF
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 bg-red-500 text-white-400 text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                    NO OFF
                  </div>
                )}

                {/* Product Image */}
                <div
                  className="relative cursor-pointer group"
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
                <div className="flex-grow flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        <span className="line-through text-red-500">
                          ₹{item.price}
                        </span>
                        <span className="ml-2 text-gray-800 font-medium">
                          ₹{item.discountedPrice} / {item.unit[0]}
                        </span>
                      </p>
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
                  <div className="lg:mt-10 sm:mt-5 mb-2">
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
            <p className="text-red-500 px-2 font-semibold">
              No related products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
