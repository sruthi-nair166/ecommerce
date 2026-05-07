import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ecommerce-vhgs.onrender.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;

    axios
      .get(
        `https://ecommerce-vhgs.onrender.com/analytics/recommend?category=${encodeURIComponent(
          product.category,
        )}`,
      )
      .then((res) => {
        setRecommendedProducts(res.data.recommendations);
      })
      .catch((err) => console.log(err));
  }, [product]);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <div>
        <Link to="/" className="block text-2xl pt-6 px-12">
          <IoArrowBack />
        </Link>

        <div className="flex items-center justify-center pt-12 md:px-24 px-8">
          <div className="grid md:grid-cols-2 gap-12 p-6">
            <div>
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-80 object-contain object-center rounded-xl"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium tracking-wide rounded-full text-slate-500 uppercase mb-4">
                  {product?.category}
                </p>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {product?.name}
                </h1>

                <span className="flex items-center text-yellow-500 gap-1">
                  <div className="flex items-center gap-1 text-xl">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product?.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="font-medium">{product?.rating}</span>
                  <span>({product?.count})</span>
                </span>

                <p className="text-2xl text-slate-500 font-semibold mt-2">
                  ₹{product?.price}
                </p>

                <p className="text-gray-600 mt-4">{product?.description}</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const token = localStorage.getItem("token");

                  if (!token) {
                    alert("Please login to add items to Cart");
                    return;
                  }

                  const user = JSON.parse(localStorage.getItem("user"));

                  const existingCart =
                    JSON.parse(localStorage.getItem(`cart-${user.id}`)) || [];

                  const existingProduct = existingCart.find(
                    (item) => item._id === product._id,
                  );

                  let updatedCart;

                  if (existingProduct) {
                    updatedCart = existingCart.map((item) =>
                      item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                    );
                  } else {
                    updatedCart = [
                      ...existingCart,
                      { ...product, quantity: 1 },
                    ];
                  }

                  localStorage.setItem(
                    `cart-${user.id}`,
                    JSON.stringify(updatedCart),
                  );

                  alert("Added to cart");
                }}
                className="mt-6 rounded-full bg-teal-900 hover:bg-teal-600 transition text-white flex items-center justify-center px-4 py-3"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="px-16 pt-8">
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-6">More like this</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative border-2 rounded-2xl border-slate-200 shadow-md pb-6"
                >
                  <div className="w-full h-96 overflow-hidden flex justify-center items-center">
                    <img
                      className="object-contain p-4"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <p className="absolute left-3 top-3 text-sm rounded-full border text-slate-500 border-slate-400 px-2 pt-0.5 pb-1">
                    {product.category}
                  </p>

                  <div className="px-6 pt-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg text-teal-900 font-medium leading-snug">
                        {product.name}
                      </h3>

                      <span className="flex items-center justify-center text-yellow-500 gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                        <span className="font-medium">{product.rating}</span>
                        <span>({product.count})</span>
                      </span>
                    </div>

                    <p className="text-slate-500 text-lg font-medium">
                      ₹ {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
