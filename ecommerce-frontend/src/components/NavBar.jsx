import { Link } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("token");

  function handleSignout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  }

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex">
          <Link
            to="/"
            className="me-10 text-teal-600 font-extrabold flex items-center text-xl gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.8"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p>ShopLink</p>
          </Link>
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 text-teal-900 hover:text-teal-600 transition"
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className="text-teal-900 hover:text-teal-600 transition"
              >
                What's Popular
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-teal-900 hover:text-teal-600 transition"
              >
                Deals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-teal-900 hover:text-teal-600 transition"
              >
                Delivery
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-5">
          {token && (
            <Link
              to="/cart"
              className="flex items-center gap-1 text-teal-900 hover:text-teal-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          )}

          {token ? (
            <>
              <Link to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-teal-900 hover:text-teal-600 transition"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                onClick={handleSignout}
                className="flex gap-1 text-teal-900 hover:text-teal-600 transition"
              >
                <span>Sign Out</span>
              </Link>
            </>
          ) : (
            <Link
              to="/signin"
              className="flex gap-1 text-teal-900 hover:text-teal-600 transition"
            >
              <span>Sign In</span>
            </Link>
          )}
        </div>
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-7 text-teal-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default NavBar;
