import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Product1 from "./assets/1.moisturizer.jpg";
import Product2 from "./assets/2.t-shirt.jpg";
import Product3 from "./assets/3.handbag.jpg";
import Product4 from "./assets/4.cookware.jpg";
import Product5 from "./assets/5.wireless-headphones.jpg";
import Product6 from "./assets/6.denim-jacket.jpg";
import Product7 from "./assets/7.laptop.jpg";
import Product8 from "./assets/8.vacuum-cleaner.jpg";
import Product9 from "./assets/9.cleaning-supplies.jpg";
import Product10 from "./assets/10.knee-pads.jpg";
import Product11 from "./assets/11.perfume.jpg";
import Product12 from "./assets/12.smartphone.jpg";
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    name: "Hydrating Facial Moisturizer",
    price: 250,
    category: "Beauty & Personal Care",
    rating: 4.7,
    count: 120,
    image: Product1,
  },
  {
    id: 2,
    name: "Graphic Print T-Shirt",
    price: 499,
    category: "Fashion & Apparel",
    rating: 4.5,
    count: 200,
    image: Product2,
  },
  {
    id: 3,
    name: "Women's Designer Handbag",
    price: 850,
    category: "Fashion & Apparel",
    rating: 4.9,
    count: 150,
    image: Product3,
  },
  {
    id: 4,
    name: "Non-Stick Cookware Set",
    price: 1200,
    category: "Home & Kitchen",
    rating: 4.7,
    count: 95,
    image: Product4,
  },
  {
    id: 5,
    name: "Wireless Bluetooth Headphones",
    price: 499,
    category: "Electronics & Gadgets",
    rating: 4.7,
    count: 230,
    image: Product5,
  },
  {
    id: 6,
    name: "Men's Denim Jacket",
    price: 499,
    category: "Fashion & Apparel",
    rating: 4.5,
    count: 150,
    image: Product6,
  },
  {
    id: 7,
    name: "Gaming Laptop - 16GB RAM, 512GB SSD",
    price: 64990,
    category: "Electronics & Gadgets",
    rating: 4.9,
    count: 210,
    image: Product7,
  },
  {
    id: 8,
    name: "Cordless Vacuum Cleaner",
    price: 7599,
    category: "Home & Kitchen",
    rating: 4.4,
    count: 180,
    image: Product8,
  },
  {
    id: 9,
    name: "Eco-Friendly Cleaning Supplies Kit",
    price: 790,
    category: "Home & Kitchen",
    rating: 4.8,
    count: 120,
    image: Product9,
  },
  {
    id: 10,
    name: "Adjustable Knee Pads",
    price: 445,
    category: "Health & Fitness",
    rating: 4.3,
    count: 70,
    image: Product10,
  },
  {
    id: 11,
    name: "Eau de Parfum - Floral Scent",
    price: 431,
    category: "Beauty & Personal Care",
    rating: 4.8,
    count: 160,
    image: Product11,
  },
  {
    id: 12,
    name: "Smartphone - 128GB",
    price: 11149,
    category: "Electronics & Gadgets",
    rating: 4.6,
    count: 320,
    image: Product12,
  },
];

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceSortArray, setPriceSortArray] = useState([]);
  const [ratingSortArray, setRatingSortArray] = useState([]);

  function filter(value) {
    setFilteredProducts([]);
    setPriceSortArray([]);
    setRatingSortArray([]);

    products.filter((product) => {
      if (product.category === value) {
        setFilteredProducts((prev) => [...prev, product]);
      }
    });
  }

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroSection />
        <Categories filter={filter} />
        <Products
          products={products}
          filter={filter}
          filteredProducts={filteredProducts}
          priceSortArray={priceSortArray}
          setPriceSortArray={setPriceSortArray}
          ratingSortArray={ratingSortArray}
          setRatingSortArray={setRatingSortArray}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
