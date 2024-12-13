import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data"; // Your data source
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(data);
  const [prdid, setPrdId] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = product.find((item) => item.id === id);
    setPrdId(foundProduct);
  }, [id]);

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

  return (
    <div>
      <div className="flex items-center gap-3 lg:ml-64 sm:ml-5 mt-10 py-10 text-grayForPageHeading">
        <FaArrowCircleLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="text-[18px]">Product / {prdid?.name}</p>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-10 lg:mt-16 lg:w-[60%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:px-10 lg:m-auto">
        <div className="flex flex-col justify-center items-center sm:mb-10">
          <img
            src={prdid?.image}
            alt={prdid?.name}
            className="w-56 h-36 rounded-lg object-contain lg:mb-4 sm:mb-3 border-[1px] border-gray-400"
          />
          <div className="flex gap-8">
            <button onClick={decreaseQuantity} className="text-xl">
              -
            </button>
            <button>{quantity}</button>
            <button onClick={increaseQuantity} className="text-xl">
              +
            </button>
          </div>
          <div className="mt-5">(₹ {prdid?.price * quantity})</div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="lg:text-3xl sm:text-2xl text-grayForPageHeading">
              {prdid?.name}
            </h1>
            {/* <p>{prdid?.description}</p> */}
            <p className="text-grayForPageHeading">
              ₹ {prdid?.price} / {prdid?.unit}
            </p>
          </div>

          <div>
            <h1 className="lg:text-3xl sm:text-2xl text-grayForPageHeading">
              Description
            </h1>
            <p className="text-grayForFooterLinks">{prdid?.description}</p>
          </div>

          <div>
            <h1 className="lg:text-3xl sm:text-2xl text-grayForPageHeading">
              Nutrients Information
            </h1>
            <p className="text-grayForFooterLinks">
              Protein : {prdid?.nutrients?.protein}
            </p>
            <p className="text-grayForFooterLinks">
              Carbohydrates : {prdid?.nutrients?.carbohydrates}
            </p>
            <p className="text-grayForFooterLinks">
              Fats : {prdid?.nutrients?.fats}
            </p>
          </div>

          <div>
            <button className="px-4 py-[4px] rounded-2xl bg-greenForBuyNow text-white-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
