import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function ProductCard({ product }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating,
    count: product.count,
    description: product.description,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `http://localhost:3000/products/${product._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Product updated");

      setIsEditOpen(false);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const isAdmin = user?.role === "admin";

  async function handleDelete(e) {
    e.preventDefault();

    const confirmDelete = confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://localhost:3000/products/${product._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div className="relative border-2 rounded-2xl border-slate-200 shadow-md pb-6">
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

            <div className="flex items-center justify-between pt-4">
              <p className="text-slate-500 text-lg font-medium">
                <span>₹</span> {product.price.toLocaleString()}
              </p>

              {isAdmin && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditOpen(true);
                    }}
                    className="border border-teal-900 hover:bg-slate-200 transition rounded-md px-3 py-1 text-sm text-teal-950"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={handleDelete}
                    className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-md px-3 py-1 text-sm"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
      {isAdmin && isEditOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-teal-950">
                Edit Product
              </h2>

              <button
                onClick={() => setIsEditOpen(false)}
                className="text-slate-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
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

              <button className="bg-teal-900 hover:bg-teal-600 transition text-white rounded-lg h-11">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
