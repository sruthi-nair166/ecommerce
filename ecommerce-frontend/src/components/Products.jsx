import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

function Products({ products, setProducts }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [isAddOpen, setIsAddOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    rating: "",
    count: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleAddProduct(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:3000/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product added");

      setIsAddOpen(false);

      window.location.reload();
    } catch (err) {
      console.log(err.response?.data || err);
    }
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const isAdmin = user?.role === "admin";

  async function fetchProducts(params = "") {
    try {
      const response = await axios.get(
        `http://localhost:3000/products${params}`,
      );

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="products" className="px-4 sm:px-6 lg:px-12 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-medium pb-8 text-teal-950">Top Deals</h2>

        <div className="flex gap-3 pb-4 flex-wrap">
          <div className="relative flex-1">
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);

                if (e.target.value.trim() === "") {
                  fetchProducts();
                } else {
                  fetchProducts(`?name=${e.target.value}`);
                }
              }}
              className="border-2 border-slate-300 rounded-md
        w-full sm:w-64 h-9 ps-2"
            />

            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 absolute top-1/2 -translate-y-1/2 end-2 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  setIsSortByOpen(false);
                }}
                className="flex items-center justify-center bg-teal-900 hover:bg-teal-600 transition text-white border-0 rounded-md px-4 h-9 gap-1"
              >
                <span className="pt-1 pb-1.5">Filter</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 z-10 border-2 border-slate-300 rounded-lg shadow-md bg-white">
                  <ul className="flex flex-col items-start w-52">
                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts();
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        All
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts(
                            `?category=${encodeURIComponent("Electronics & Gadgets")}`,
                          );
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Electronics & Gadgets
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts(
                            `?category=${encodeURIComponent("Fashion & Apparel")}`,
                          );
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Fashion & Apparel
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts(
                            `?category=${encodeURIComponent("Beauty & Personal Care")}`,
                          );
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Beauty & Personal Care
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts(
                            `?category=${encodeURIComponent("Home & Kitchen")}`,
                          );
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Home & Kitchen
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition w-full px-4 py-2 text-teal-950">
                      <button
                        onClick={() => {
                          setIsFilterOpen(false);
                          fetchProducts(
                            `?category=${encodeURIComponent("Health & Fitness")}`,
                          );
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Health & Fitness
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsSortByOpen(!isSortByOpen);
                  setIsFilterOpen(false);
                }}
                className="flex items-center justify-center border-2 border-teal-900 rounded-md ps-3 pe-2 h-9 gap-1 text-teal-950 hover:bg-slate-200 transition"
              >
                <span className="pt-1 pb-1.5">Sort By</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {isSortByOpen && (
                <div className="absolute right-0 mt-2 z-10 border-2 rounded-lg border-slate-300 shadow-md bg-white">
                  <ul className="flex flex-col items-start w-52">
                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                      <button
                        onClick={() => {
                          fetchProducts("?sort=price_desc");
                          setIsSortByOpen(false);
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Price: High to Low
                      </button>
                    </li>

                    <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                      <button
                        onClick={() => {
                          fetchProducts("?sort=price_asc");
                          setIsSortByOpen(false);
                        }}
                        className="w-full text-left"
                        type="button"
                      >
                        Price: Low to High
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {isAdmin && (
            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="flex items-center border-2 border-teal-900 hover:bg-slate-200 transition text-teal-900 rounded-md gap-1 px-4 h-9"
            >
              Add Product
              <FaPlus />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-xl sm:text-2xl text-slate-400 mt-12 mb-10">
          No results found
        </p>
      )}

      {isAdmin && isAddOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-teal-950">
                Add Product
              </h2>

              <button
                type="button"
                onClick={() => setIsAddOpen(false)}
                className="text-slate-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product name"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <input
                type="number"
                name="count"
                value={formData.count}
                onChange={handleChange}
                placeholder="Review Count"
                className="border-2 border-slate-300 rounded-lg h-11 px-4"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border-2 border-slate-300 rounded-lg px-4 py-3 min-h-28 resize-none"
              />

              <button
                type="submit"
                className="bg-teal-900 hover:bg-teal-600 transition text-white rounded-lg h-11"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
