import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data";

export const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState(data);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <center className="text-grayForPageHeading lg:text-3xl sm:text-xl lg:font-bold sm:font-medium mt-20 py-5 mb-5">
          Best Selling Products
        </center>
      </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center sm:grid sm:grid-cols-2 sm:gap-5 sm:px-5">
        {bestSeller.map((item) => {
          return (
            item.bestSeller === true && (
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
            )
          );
        })}
      </div>
    </div>
  );
};
