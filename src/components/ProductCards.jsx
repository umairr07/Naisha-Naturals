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
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl lg:font-bold md:font-bold sm:font-medium mt-20 py-5 mb-5 text-grayForPageHeading lg:px-16 sm:px-5">
            | Products
          </h1>
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

      <div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-16
      sm:px-5 "
      >
        {productData.length > 0 ? (
          productData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white-400 border border-gray-400 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col justify-between gap-5">
                {/* Discount Badge */}

                {item.discount > 0 ? (
                  <div className="absolute top- left-0 bg-green-400 text-white-400 text-xs font-bold px-3 py-1 rounded-br-xl z-10">
                    {item.discount}% OFF
                  </div>
                ) : (
                  <div className="absolute top- left-0 bg-red-500 text-white-400 text-xs font-bold px-3 py-1 rounded-br-xl z-10">
                    NO OFF
                  </div>
                )}

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

export default ProductCards;
