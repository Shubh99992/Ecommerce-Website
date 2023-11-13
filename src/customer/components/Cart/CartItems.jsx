import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from "@mui/material";
import { Button } from "@mui/base";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold"> Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 Size: L,White"> </p>
          <p className="opacity-70 mt-2 "> Seller: Crishtaliyo 2fashion </p>

          <div className="flex space-x-5 items-center text-grey-900 pt-6 ">
            <p className="font-semibold">₹192</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>

      </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">3</span>
                <IconButton>
                <AddCircleOutlineIcon/>
                </IconButton>
                
            </div>
            <div>
                <Button className="text-indigo-800">
                    Remove
                </Button>
            </div>
        </div>
    </div>
  );
};

export default CartItems;
