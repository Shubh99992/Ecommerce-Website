import React from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/base";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart = () => {
  const extraStyle = {
    boxShadow: "1px 2px 9px #0F172A",
    margin: "0.5em auto", // Center the container
    padding: "1em",
    maxWidth: "600px", // Adjust the maximum width as needed
    width: "100%", // Make sure it takes the full width on smaller screens
  };

  return (
    <div>
      <div className="lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative">
        <div className="col-span-2 mt-3 ml-5 mr-5">
          {[1, 1, 1, 1, 1, 1].map((_, index) => (
            <CartItems key={index} />
          ))}
        </div>

        <div className="px-5 sticky top-0 mt-10 lg:mt-0">
          <div className="bgcolor-white rounded-md" style={extraStyle}>
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price(1 item)</span>
                <span className="text-green-600">₹4,697</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹3,419</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                {/* <span  style={{ marginRight: "-15rem" }}>₹40</span> */}
                <span className="text-green-600 ml-2"><span className="text-gray-600 line-through mr-2">₹40</span>Free</span>
              </div>
              <hr className="border-dashed" />
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">1,278</span>
              </div>
              <hr className="border-dashed" />
              <div className="flex justify-between pt-3 font-bold">
                <span className="text-green-600">You will save ₹3,419 on this order </span>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-1.5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              CheckOut &nbsp; <ShoppingCartCheckoutIcon/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
