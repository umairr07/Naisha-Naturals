import { useNavigate, useParams } from "react-router-dom";
import { data, newArrivals, bestSellers } from "../../data/data"; // Your data source
import { useContext, useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { handleSuccess } from "../../utils/Toast";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductsDetails = () => {
  const { id } = useParams();
  const [prdid, setPrdId] = useState(null);
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const combinedProducts = [...data, ...newArrivals, ...bestSellers];
    const foundProduct = combinedProducts.find((item) => item.id === id);
    setPrdId(foundProduct);
  }, [id]);

  const { addToCart } = useContext(CartContext);

  const handleMoreInfo = () => {
    setInfo(!info);
  };

  return (
    <div className="flex flex-col items-center py-16 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-6">
        <button
          className="flex items-center gap-2 text-gray-600 text-xl"
          onClick={() => navigate("/product-cards")}
        >
          <IoMdArrowRoundBack className="text-2xl" />
          Back to All Products
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 lg:max-w-4xl md:max-w-xl md:flex md:flex-row w-full bg-white-400 rounded-lg border border-gray-400 overflow-hidden">
        {/* Image Section */}
        <div className="p-6">
          <img
            src={prdid?.image}
            alt={prdid?.name}
            className="w-full md:w-[200px] sm:w-[200px]  h-auto rounded-lg object-cover border border-gray-300"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-6 space-y-5">
          {/* Product Name */}
          <div className="text-grayForPageHeading">
            <h1 className="text-4xl font-bold mb-2">{prdid?.name}</h1>
            <p>By {prdid?.brand}</p>
          </div>
          {/* Price */}
          <div>
            <div className="text-lg text-gray-600 mb-0 flex items-center">
              <p className="line-through text-red-500 mt-1">₹{prdid?.price}</p>
              <p className="text-3xl text-green-400 font-semibold ml-2">
                ₹{prdid?.discountedPrice}
              </p>
              {prdid?.discount > 0 ? (
                <p className="ml-5 font-semibold bg-green-400 text-white-400 px-2 rounded-md text-[10px]">
                  {prdid?.discount}% OFF
                </p>
              ) : (
                <p className="ml-5 font-semibold bg-red-500 text-white-400 px-2 rounded-md text-[10px]">
                  NO OFF
                </p>
              )}
            </div>
            <div className="text-grayForPageHeading text-[15px]">
              <p>{prdid?.unit}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{prdid?.description}</p>
          {/* Buttons */}
          <div className="flex items-center gap-4 mb-20">
            <button
              onClick={() => {
                addToCart(prdid);
                handleSuccess(`${prdid?.name} added to Cart`);
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
                    1) Protein : {prdid?.nutrients?.protein}
                  </p>
                  <p className="ml-5">
                    2) Carbohydrates : {prdid?.nutrients?.carbohydrates}
                  </p>
                  <p className="ml-5">3) Fats : {prdid?.nutrients?.fats}</p>
                </div>
                <div className="space-y-5">
                  <p>
                    <span className="text-green-400 text-[18px]">
                      Mfg Date :
                    </span>{" "}
                    <span>{prdid?.manufactureDate}</span>
                  </p>
                  <p>
                    <span className="text-green-400 text-[18px]">
                      Life Span :
                    </span>{" "}
                    <span>{prdid?.lifespan}</span>
                  </p>
                </div>
                <div>
                  <p className="text-green-400 text-[18px]">
                    Storage Instructions :{" "}
                    <span className="text-[18px] text-grayForPageHeading">
                      {prdid?.additionalInfo}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
