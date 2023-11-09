import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
// import HomePage from './customer/Pages/HomePage/HomePage.jsx';
import Footer from './customer/components/Footer/Footer.jsx';
import ProductDetail from './customer/components/ProductDetails/ProductDetail.jsx';

// import Product from './customer/components/Product/Product.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
      <ProductDetail/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
