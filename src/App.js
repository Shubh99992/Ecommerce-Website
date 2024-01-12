import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="">
      <div><SpeedInsights /></div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
