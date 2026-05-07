import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const cart = JSON.parse(localStorage.getItem(`cart-${user.id}`)) || [];
    setCartItems(cart);
  }, []);

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <NavBar />

      <div>
        <div className="px-12 pt-6">
          <Link to="/" className="text-2xl text-gray-700 hover:text-black">
            <IoArrowBack />
          </Link>
        </div>

        <div className="px-12 py-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border-2 rounded-2xl border-slate-200 shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-slate-400 text-center text-xl">
                Your Cart is Empty
              </p>
            ) : (
              cartItems.map((product) => (
                <div
                  key={product._id}
                  className="flex gap-5 items-center border-b border-slate-300 pb-6 pt-6"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">
                        {product.name}
                      </h3>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <p className="text-lg font-semibold mt-2">
                        ₹{product.price}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() => handleDecrease(product._id)}
                          className="p-2 border rounded-md hover:bg-gray-100"
                        >
                          <LuMinus />
                        </button>

                        <span className="w-6 text-center">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() => handleIncrease(product._id)}
                          className="p-2 border rounded-md hover:bg-gray-100"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-2 rounded-2xl border-slate-200 shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹0</span>
              </div>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button className="w-full mt-6 bg-teal-900 hover:bg-teal-600 transition text-white py-3 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
