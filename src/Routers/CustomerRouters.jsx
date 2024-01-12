import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/Pages/HomePage/HomePage.jsx';
import Navigation from '../customer/components/Navigation/Navigation.jsx';
import Footer from '../customer/components/Footer/Footer.jsx';
import Product from '../customer/components/Product/Product.jsx';
import ProductDetail from '../customer/components/ProductDetails/ProductDetail.jsx';
import Cart from '../customer/components/Cart/Cart.jsx';
import Checkout from '../customer/components/Checkout/Checkout.jsx';
import Order from '../customer/components/Order/Order.jsx';
import OrderDetails from '../customer/components/Order/OrderDetails.jsx';
const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/> 
        </div>
         <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:labelTwo/:LabelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetail/>}></Route>
            <Route path='/product/:productId' element={<ProductDetail/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            
           
      
      
    
         </Routes>
         <homePage/>
         <div>
         <Footer/>
         </div>
    </div>
  )
}

export default CustomerRouters