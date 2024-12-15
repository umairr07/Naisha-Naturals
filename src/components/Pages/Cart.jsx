import { useContext } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { handleError } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateCartItems, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  // Function to increase the quantity of a cart item
  const increaseQuantity = (id, currentQuantity) => {
    updateCartItems(id, currentQuantity + 1);
  };

  // Function to decrease the quantity of a cart item
  const decreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateCartItems(id, currentQuantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalAmount } });
  };

  // Calculate total
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="p-5 text-grayForPageHeading min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="lg:flex lg:justify-between lg:gap-8">
        {/* Left Section - Cart Items */}
        <div className="flex flex-col lg:w-[60%]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 lg:p-4 sm:p-2 border border-gray-300 shadow-md bg-white-400"
              >
                {/* Item Details */}
                <div className="flex items-center lg:gap-4 sm:gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="lg:w-20 lg:h-20 sm:w-[60px] sm:h-[60px] object-contain rounded-lg"
                  />
                  <div>
                    <p className="font-semibold lg:text-lg sm:text-[15px]">
                      {item.name}
                    </p>
                    <p className="text-gray-600 lg:text-sm sm:text-[12px]">
                      <span className="line-through">₹{item.price}</span>
                      <span className="ml-3 text-green-600 font-medium">
                        ₹{item.discountedPrice} / {item.unit}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="lg:flex items-center gap-2">
                  <p className="lg:text-lg sm:text-sm font-medium">Quantity:</p>
                  <div className="flex items-center gap-4 border border-gray-300 lg:py-2 lg:px-3 rounded-lg">
                    <button
                      onClick={() => decreaseQuantity(item.id, item.quantity)}
                      className="text-red-500 lg:text-xl p-2 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus />
                    </button>
                    <span className="lg:text-lg sm:text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id, item.quantity)}
                      className="text-green-400 lg:text-lg sm:text-sm p-2 rounded-full hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300"
                      aria-label="Increase quantity"
                    >
                      <FaPlus />
                    </button>
                    <div>
                      <AiOutlineDelete
                        className="lg:text-xl cursor-pointer text-red-600 hover:text-red-500 transition-all"
                        onClick={() => {
                          removeFromCart(item.id);
                          handleError(`${item.name} removed from Cart`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-14 min-h-screen lg:ml-[500px]">
              <center className="text-xl text-red-500 py-5">
                Your Cart is Empty!
              </center>
              <div className="flex justify-center items-center">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--bucket-shopping-basket-cuterr-illustrations-pack-people-3020773.png?f=webp"
                  alt="Empty cart"
                  className="lg:w-96 sm:w-56 h-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Summary */}
        {cartItems.length > 0 && (
          <div className="lg:w-[35%] p-5 border border-gray-300 shadow-md bg-white-400 h-fit">
            <h3 className="lg:text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <p className="text-gray-700 lg:font-normal sm:text-[14px] lg:text-lg">
                    {item.name} x {item.quantity}
                  </p>
                  <p className="text-gray-700 lg:font-medium sm:text-[14px] lg:text-lg">
                    ₹{item.discountedPrice * item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between lg:text-lg font-bold">
              <p>Total:</p>
              <p>₹{totalAmount}</p>
            </div>
            <button
              className="w-full mt-5 bg-green-400 text-white-400 lg:py-2 lg:px-4 sm:py-1 sm:px-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
