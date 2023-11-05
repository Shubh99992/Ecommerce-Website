import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="App">
    <div>
      <Navigation/>
      <HomePage/>
    </div>
    </div>
  );
}

export default App;
