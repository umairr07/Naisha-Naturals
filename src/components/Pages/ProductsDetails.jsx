import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data"; // Your data source
import { useContext, useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { handleSuccess } from "../../utils/Toast";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(data);
  const [prdid, setPrdId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(true);
  const [disclaimer, setDisclaimer] = useState(false);
  const [info, setInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = product.find((item) => item.id === id);
    setPrdId(foundProduct);
  }, [id]);

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  const increaseQuantity = () => {
    const count = quantity + 1;
    setQuantity(count);
  };

  const decreaseQuantity = () => {
    const count = quantity - 1;
    setQuantity(count);
  };

  const handleDescription = () => {
    setDescription(true);
    setDisclaimer(false);
    setInfo(false);
  };

  const handleDisclaimer = () => {
    setDescription(false);
    setDisclaimer(true);
    setInfo(false);
  };

  const handleMoreInfo = () => {
    setDescription(false);
    setDisclaimer(false);
    setInfo(true);
  };

  return (
    <div>
      {/* arrow for redirecting to home page */}
      <div className="flex items-center gap-3 lg:ml-64 sm:ml-5 mt-10 py-10 text-grayForPageHeading">
        <FaArrowCircleLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="text-[18px]">Product / {prdid?.name}</p>
      </div>

      {/* product image and right div */}
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-10 lg:mt-5 lg:w-[100%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:px-10 lg:m-auto">
        <div className="flex flex-col justify-center items-center sm:mb-10 w-[40%]">
          <img
            src={prdid?.image}
            alt={prdid?.name}
            className="lg:w-[400px] lg:h-[300px] rounded-lg object-cover lg:mb-4 sm:mb-3 border-[1px] border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-10 lg:w-[40%]">
          <div>
            <h1 className="lg:text-3xl sm:text-2xl text-grayForPageHeading">
              {prdid?.name}
            </h1>
            {/* <p>{prdid?.description}</p> */}
            <div className="text-grayForPageHeading flex items-center">
              <p className="line-through">₹{prdid?.price}</p>
              <p className="ml-3">
                ₹{prdid?.discountedPrice} / {prdid?.unit}
              </p>
              <p className="ml-3 font-semibold bg-greenForBuyNow text-white-400 px-2 py-1 rounded-md text-[10px]">
                {prdid?.discount}% OFF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-grayForPageHeading">
            <p className="text-xl">Quantity : </p>
            <div className="flex gap-8 border border-gray-400 py-2 px-2 rounded-lg">
              <button
                onClick={decreaseQuantity}
                className="text-greenForPlus text-xl bg-gray-50 px-2 rounded-full shadow-md"
              >
                -
              </button>
              <button>{quantity}</button>
              <button
                onClick={increaseQuantity}
                className="text-greenForPlus text-xl bg-gray-50 px-2 rounded-full shadow-md"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 text-grayForPageHeading">
            <p className="text-xl">Price / Quantity : </p>
            <div className="text-[18px] text-greenForBuyNow">
              ₹ {prdid?.discountedPrice * quantity}
            </div>
          </div>

          <div>
            <button
              className="px-4 py-[4px] rounded-2xl bg-greenForBuyNow text-white-400"
              onClick={() => {
                addToCart(prdid);
                navigate("/cart");
                handleSuccess(`${prdid?.name} added to Cart`);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* More Details of Product  */}
      <div className="lg:ml-[15%] sm:ml-5 sm:mt-10 text-grayForPageHeading h-[70vh]">
        <div className="text-grayForPageHeading lg:text-2xl sm:text-[18px] lg:font-semibold">
          <h1>More Details of Product / {prdid?.name}</h1>
        </div>

        {/* buttons  */}
        <div className="flex lg:gap-8 sm:gap-2 mt-5">
          {description ? (
            <button
              className="lg:text-[17px] sm:text-[12px] lg:px-5 bg-green-400 border text-white-400 p-2 rounded-xl"
              onClick={handleDescription}
            >
              Description
            </button>
          ) : (
            <button
              className="lg:text-[17px] sm:text-[12px] lg:px-5 border border-gray-400 p-2 rounded-xl"
              onClick={handleDescription}
            >
              Description
            </button>
          )}
          {disclaimer ? (
            <button
              className="lg:text-[17px] sm:text-[12px]  px-5 bg-green-400 border text-white-400 p-2 rounded-xl"
              onClick={handleDisclaimer}
            >
              Disclaimer
            </button>
          ) : (
            <button
              className="lg:text-[17px] sm:text-[12px]  px-5 border border-gray-400 p-2 rounded-xl"
              onClick={handleDisclaimer}
            >
              Disclaimer
            </button>
          )}
          {info ? (
            <button
              className="lg:text-[17px] sm:text-[12px]  px-5 bg-green-400 border text-white-400 p-2 rounded-xl"
              onClick={handleMoreInfo}
            >
              More Info
            </button>
          ) : (
            <button
              className="lg:text-[17px] sm:text-[12px]  px-5 border border-gray-400 p-2 rounded-xl"
              onClick={handleMoreInfo}
            >
              More Info
            </button>
          )}
        </div>

        {/* Descritpion Section */}
        {description && (
          <div className="mt-5 flex flex-col gap-5">
            <div>
              <p className="text-greenForPlus lg:text-[20px]">Overview</p>
              <p className="lg:text-[17px] sm:text-[13px]">
                {prdid?.description}
              </p>
            </div>
            <div>
              <p className="text-greenForPlus lg:text-[20px]">Nutrients</p>
              <p className="lg:text-[17px] sm:text-[13px] ml-5">
                1) Protein : {prdid?.nutrients?.protein}
              </p>
              <p className="lg:text-[17px] sm:text-[13px] ml-5">
                2) Carbohydrates : {prdid?.nutrients?.carbohydrates}
              </p>
              <p className="lg:text-[17px] sm:text-[13px] ml-5">
                3) Fats : {prdid?.nutrients?.fats}
              </p>
            </div>
            <div>
              <p className="text-greenForPlus lg:text-[20px]">
                Mfg Date :{" "}
                <span className="lg:text-[17px] sm:text-[13px] text-grayForPageHeading">
                  {prdid?.manufactureDate}
                </span>
              </p>
            </div>
            <div>
              <p className="text-greenForPlus lg:text-[20px]">
                Life Span :{" "}
                <span className="lg:text-[17px] sm:text-[13px] text-grayForPageHeading">
                  {prdid?.lifespan}
                </span>
              </p>
            </div>
            <div>
              <p className="text-greenForPlus lg:text-[20px]">
                Storage Instructions :{" "}
                <span className="lg:text-[17px] sm:text-[13px] text-grayForPageHeading">
                  {prdid?.additionalInfo}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Disclaimer Section */}
        {disclaimer && (
          <div className="mt-5 text-grayForPageHeading lg:text-[17px] sm:text-[13px] w-[86%]">
            While we work to ensure that the product information is correct,
            actual product packaging and material may contain more or different
            information from what is given here. Please read the product labels,
            description, directions, warning and other information that comes
            with the actual product before use.
          </div>
        )}

        {/* More Info */}
        {info && (
          <div className="mt-5 flex items-center gap-5">
            <h1 className="text-greenForPlus lg:text-[20px]">Reviews : </h1>
            <span className="lg:text-[17px] sm:text-[13px]">
              {prdid?.reviews}⭐
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDetails;
