
import './App.css';
import './Responsive.css';
import Home from './Pages/Home';
import './App.css'
import Cat from './Comp/Cat'
import Slider from './Comp/Slider';
import Featured from './Comp/Featured';
import Product from './Comp/Product';
import Propage from './Comp/Propage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './Comp/Navbar';

function App() {
  return (

    <>
    <Router>

   

      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/propage' element={<Propage/>}/>
     
    </Routes>
    </Router>
    </>
  );
}

export default App;
