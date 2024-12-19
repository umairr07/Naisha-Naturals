import { useNavigate, useParams } from "react-router-dom";
import { data, newArrivals } from "../../data/data"; // Your data source
import { useContext, useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { handleSuccess } from "../../utils/Toast";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ProductsDetails = () => {
  const { id } = useParams();
  const [prdid, setPrdId] = useState(null);
  const navigate = useNavigate();
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const combinedProducts = [...data, ...newArrivals];
    const foundProduct = combinedProducts.find((item) => item.id === id);
    setPrdId(foundProduct);
  }, [id]);

  const { addToCart } = useContext(CartContext);

  const handleMoreInfo = () => {
    setInfo(!info);
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-6">
        <button
          className="flex items-center gap-2 text-gray-600 text-xl"
          onClick={() => navigate("/")}
        >
          <FaArrowCircleLeft className="text-xl" />
          Back to All Products
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 max-w-4xl w-full bg-white-400 rounded-lg border border-gray-400 overflow-hidden">
        {/* Image Section */}
        <div className="p-6">
          <img
            src={prdid?.image}
            alt={prdid?.name}
            className="w-full h-auto rounded-lg object-cover border border-gray-300"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-7 p-6">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {prdid?.name}
          </h1>
          {/* Price */}
          <p className="text-lg text-gray-600 mb-4">
            <span className="line-through text-red-500">₹{prdid?.price}</span>
            <span className="ml-2 text-2xl text-gray-800 font-semibold">
              ₹{prdid?.discountedPrice}
            </span>
          </p>
          {/* Description */}
          <p className="text-gray-700 mb-6">{prdid?.description}</p>
          {/* Buttons */}
          <div className="flex items-center gap-4">
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
                    <span className="lg:text-[17px] sm:text-[13px] text-grayForPageHeading">
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
