import React, { useContext, useEffect, useState } from "react";
import { data } from "../../data/data";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { CartContext } from "../../context/CartContext";
import { handleSuccess } from "../../utils/Toast";

const CategoryProducts = () => {
  const [product, setProducts] = useState(data);
  const [pCategory, setPCategory] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const { name } = useParams();

  useEffect(() => {
    const findProduct = product.filter((item) => item.category === name);
    setPCategory(findProduct);
  }, [name]);
  console.log(pCategory);

  return (
    <div>
      <div className="flex items-center gap-3 lg:ml-64 sm:ml-5 mt-10 py-10 text-grayForPageHeading">
        <FaArrowCircleLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="text-[18px]">
          Product / Category / {pCategory[0]?.category}
        </p>
      </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center sm:grid sm:grid-cols-2 sm:gap-5 sm:px-5">
        {pCategory.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 border-gray-300 rounded-xl lg:w-[20%] py-5 m-[1%] p-4 flex flex-col items-center bg-grayForCards cursor-pointer relative transition-transform duration-300 transform hover:scale-105"
            >
              {/* 10% Off Badge */}
              <div className="absolute top-0 left-0 rounded-l-xl text-white text-xs font-normal text-white-400 bg-green-400 px-2 py-1">
                {item.discount} % OFF
              </div>
              <div
                className="flex flex-col items-center"
                onClick={() => navigate(`/products-details/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt=""
                  className="lg:w-56 lg:h-36 mt-5 sm:w-[130px] sm:h-[130px] rounded-lg object-contain mb-4 transition-transform duration-300 transform hover:scale-105"
                />

                <p className="font-medium lg:text-[17px] sm:text-[15px] sm:font-normal text-grayForPageHeading ">
                  {item.name}
                </p>
                <p className="text-grayForPageHeading lg:text-[14px] md:text-[14px] sm:text-[12px] ">
                  <span className="line-through">₹{item.price}</span>
                  <span className="ml-3">
                    ₹{item.discountedPrice} / {item.unit}
                  </span>
                </p>
              </div>
              <div className="flex flex-row justify-between items-center mt-5 w-full">
                <div>
                  {item.instock === true ? (
                    <p className="text-green-400 text-xl">In Stock</p>
                  ) : (
                    <p>Out of Stock</p>
                  )}
                </div>
                <button
                  className="text-greenForPlus text-xl bg-white-400 p-2 rounded-full shadow-xl shadow-gray-400"
                  onClick={() => {
                    addToCart(item);
                    handleSuccess(`${item.name} added to Cart`);
                  }}
                >
                  <TiPlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
