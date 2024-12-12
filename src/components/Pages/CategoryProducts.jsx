import React, { useEffect, useState } from "react";
import data from "../../data/data";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const CategoryProducts = () => {
  const [product, setProducts] = useState(data);
  const [pCategory, setPCategory] = useState([]);
  const navigate = useNavigate();

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
              className="border-2 border-gray-300 rounded-xl lg:w-[20%] py-5 m-[1%] p-4 flex flex-col items-center bg-grayForCards cursor-pointer"
            >
              <div
                className="flex flex-col items-center"
                onClick={() => navigate(`/products-details/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt=""
                  className="lg:w-56 lg:h-36 sm:w-[130px] sm:h-[130px] rounded-lg object-contain mb-4 transition-transform duration-300 transform hover:scale-105"
                />

                <p className="font-medium lg:text-[17px] sm:text-[15px] sm:font-normal text-grayForPageHeading ">
                  {item.name}
                </p>
                <p className="text-grayForPageHeading lg:text-[14px] sm:text-[12px]">
                  ₹{item.price} / {item.unit}
                </p>
              </div>
              <button className="mt-10 lg:px-4 lg:py-[4px] sm:px-2 sm:py-[2px] sm:text-[14px] rounded-lg bg-green-400 text-white-400 hover:bg-green-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
