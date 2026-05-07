import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Root from "./routes/Root";
import ProductDetails from "./components/ProductDetails";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
