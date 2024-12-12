import React from "react";

const Cart = () => {
  return (
    <div className="py-14">
      <center className="text-xl text-red-500 py-5">
        Your Cart is Emptyy!!
      </center>
      <div className="flex justify-center items-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--bucket-shopping-basket-cuterr-illustrations-pack-people-3020773.png?f=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cart;
