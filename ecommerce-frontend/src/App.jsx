import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroSection />
        <Categories />
        <Products products={products} setProducts={setProducts} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
