import React from 'react';
import '../Cart/Cart.css';

const AddressCard = () => {
  return (
    <div className='shubh'>
      <div className='space-y-3'>
        <p className='font-semibold'>Ram Kapoor</p>
        <p>Mumbai, gokul dham market, 70001</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
