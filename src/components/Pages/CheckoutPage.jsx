import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CheckoutPage = () => {
  const { state } = useLocation();
  const { cartItems } = state;
  const navigate = useNavigate();

  const { emptyCartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  const handlePurchase = (items) => {
    emptyCartItems(items);
    navigate("/success");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-grayForPageHeading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Cart Summary */}
        <div className="bg-white-400 p-6 border border-gray-400 rounded-md shadow-lg">
          <h2 className="lg:text-2xl sm:text-xl font-semibold mb-4">
            Cart Summary
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex lg:gap-0 sm:gap-3 items-center border border-gray-300 p-2"
              >
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="lg:w-20 lg:h-20 sm:w-[60px] sm:h-[60px] object-contain rounded-lg"
                  />
                </div>
                <div className="lg:text-[15px] sm:text-[13px] ">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.discountedPrice * item.quantity}</p>
                </div>
              </div>
            ))}
            {/* Total */}
            <div className="flex justify-between mt-6">
              <h3 className="font-medium">Total</h3>
              <p className="text-lg font-semibold">₹{totalAmount}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Shipping and Payment */}
        <div className="bg-white-400 p-6 border border-gray-400 rounded-md shadow-lg">
          <h2 className="lg:text-2xl sm:text-xl  font-semibold mb-4">
            Shipping Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                placeholder="Street Address"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                  placeholder="City"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="mt-2 p-3 w-full border  outline-none border-gray-300 rounded-md"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </div>

          <h2 className="lg:text-2xl sm:text-xl font-semibold mt-8 mb-4">
            Payment Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                placeholder="Card Number"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-2 p-3 w-full border outline-none border-gray-300 rounded-md"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="bg-green-400 text-white-400 lg:px-6 sm:px-4 lg:py-3 sm:py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => handlePurchase(cartItems)}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
