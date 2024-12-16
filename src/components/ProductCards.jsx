import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import Cart from "./Pages/Cart.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { handleSuccess } from "../utils/Toast.jsx";
import { data } from "../data/data.js";

const listItems = [
  {
    id: "0",
    name: "All",
  },
  {
    id: "1",
    name: "Milk",
  },
  {
    id: "2",
    name: "Dairy",
  },
  {
    id: "3",
    name: "Oils",
  },
  {
    id: "4",
    name: "Vegetables",
  },
  {
    id: "5",
    name: "Grains",
  },
];

const ProductCards = () => {
  const [originalData] = useState(data); // Storing the original data
  const [productData, setProductData] = useState(data); // Storing the data to be displayed
  const [inputValue, setInputValue] = useState("");
  const route = useLocation();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const sortByCategory = (name) => {
    if (name === "All") {
      setProductData(originalData); // Show all products when "All" is selected
    } else {
      const filteredData = originalData.filter(
        (item) => item.category === name
      );
      setProductData(filteredData);
    }
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update input value state

    // Filter product data
    const filteredProducts = originalData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setProductData(filteredProducts);
  };

  const sortByPrice = (order) => {
    let sortedData = [...productData]; // Create a copy of the current product data

    if (order === "lowToHigh") {
      sortedData.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (order === "highToLow") {
      sortedData.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }

    setProductData(sortedData); // Update the displayed product data
    setIsPriceOpen(false); // Close the dropdown after sorting
  };

  return (
    <div>
      <div>
        {route.pathname === "/" ? (
          <center className="lg:text-3xl md:text-2xl sm:text-xl lg:font-bold md:font-bold sm:font-medium mt-20 py-5 mb-5 text-grayForPageHeading">
            Kuch Healthy Ho Jaye...
          </center>
        ) : (
          <div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-col sm:justify-center sm:items-center lg:mt-24 sm:mt-28 mb-8 py-5 lg:px-[100px]">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-3xl px-4 py-2 focus:outline-none lg:w-[350px] md:w-[350px] sm:w-[250px] max-w-md"
                placeholder="Search for your products"
                value={inputValue} // Controlled input
                onChange={handleSearch} // Pass only function reference
              />
            </div>

            <div className="lg:flex lg:gap-5 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-5 sm:py-5">
              {/* Dropdown Button for Price Sorting */}
              <div className="relative lg:w-64 lg:ml-4">
                <button
                  className="lg:w-full md:w-full  sm:w-40 bg-white border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center text-grayForPageHeading font-semibold"
                  onClick={togglePriceDropdown}
                >
                  Sort by Price
                  <svg
                    className={`w-5 h-5 transform ${
                      isPriceOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu for Price */}
                {isPriceOpen && (
                  <ul className="absolute z-10 mt-2 w-full bg-white-400 border border-gray-300 rounded-lg shadow-lg text-grayForPageHeading">
                    <li
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => sortByPrice("lowToHigh")}
                    >
                      Low to High
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => sortByPrice("highToLow")}
                    >
                      High to Low
                    </li>
                  </ul>
                )}
              </div>

              {/* Dropdown Button For Category */}
              <div className="relative lg:w-64">
                <button
                  className="lg:w-full md:w-full sm:w-48 bg-white border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center text-grayForPageHeading font-semibold"
                  onClick={toggleDropdown}
                >
                  Select Category
                  <svg
                    className={`w-5 h-5 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <ul className="absolute z-10 mt-2 w-full bg-white-400 border border-gray-300 rounded-lg shadow-lg text-grayForPageHeading">
                    {listItems.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => sortByCategory(item.name)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="lg:flex lg:flex-wrap lg:justify-center sm:grid sm:grid-cols-2 sm:gap-5 sm:px-5">
        {productData.length > 0 ? (
          productData.map((item) => (
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
                  className="lg:w-56 lg:h-36 lg:mt-5 sm:mt-5 md:w-56 md:h-36 sm:w-[130px] sm:h-[130px] rounded-lg object-contain mb-4 transition-transform duration-300 transform hover:scale-105"
                />

                <p className="font-medium lg:text-[17px] md:text-[17px] sm:text-[15px] sm:font-normal text-grayForPageHeading ">
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
          ))
        ) : (
          <p className="text-red-500">No products found :( </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
