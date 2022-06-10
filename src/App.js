import { BrowserRouter, Route, Routes } from "react-router-dom";


// import components
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";


// import pages
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Products from './pages/Products';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
        <Route path="/contact" element={
          <Contact/>
        }/>
        <Route path="/product" element={
          <Products/>
        }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App