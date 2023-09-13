import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/homepage/Home"
import Cart from "./pages/cartpage/Cart"
import Navbar from "./components/navbar/Navbar.jsx"
import ProductDetails from "./pages/productDetails/ProductDetails"
import { Toaster } from "react-hot-toast"

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Toaster toastOptions={{
          duration: 2000,
          style: {
            background: '#6366f1',
            color: 'white',
          }
        }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>

  )
}

export default App