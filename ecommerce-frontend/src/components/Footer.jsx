function Footer() {
  return (
    <div className="bg-slate-200 px-4 sm:px-6 lg:px-12 pt-10 pb-5 mt-14">
      <div
        className="flex flex-col items-center text-center gap-10
                lg:flex-row lg:items-start lg:text-left lg:justify-between lg:gap-0"
      >
        <div className="flex flex-col justify-between">
          <p className="text-teal-600 font-extrabold flex items-center lg:justify-start justify-center text-4xl gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.8"
              stroke="currentColor"
              className="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span>ShopLink</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className="rounded-full flex items-center justify-center h-8 ps-2 pt-2 pb-2.5"
            />
            <button
              type="button"
              className="bg-teal-900 hover:bg-teal-600 transition text-white rounded-full flex items-center justify-center h-8 px-5 pt-2 pb-2.5"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-16 lg:text-start text-center">
          <div className="flex flex-col gap-3 sm:mb-0 mb-10">
            <h4 className="text-lg font-medium mb-3 text-teal-800">About</h4>
            <a href="#" className="text-teal-700">
              About Us
            </a>
            <a href="#" className="text-teal-700">
              Delivery Information
            </a>
            <a href="#" className="text-teal-700">
              Privacy Policy
            </a>
            <a href="#" className="text-teal-700">
              Terms & Conditions
            </a>
            <a href="#" className="text-teal-700">
              Refund Policy
            </a>
            <a href="#" className="text-teal-700">
              Become Seller
            </a>
            <a href="#" className="text-teal-700">
              Vendor Profile
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:mb-0 mb-10">
            <h4 className="text-lg font-medium mb-3 text-teal-800">
              Quick Links
            </h4>
            <a href="#" className="text-teal-700">
              Your Account
            </a>
            <a href="#" className="text-teal-700">
              Returns & Exchanges
            </a>
            <a href="#" className="text-teal-700">
              Return Center
            </a>
            <a href="#" className="text-teal-700">
              Purchase History
            </a>
            <a href="#" className="text-teal-700">
              Latest News Blog
            </a>
            <a href="#" className="text-teal-700">
              Advertise your products
            </a>
            <a href="#" className="text-teal-700">
              Sell product
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:mb-0 mb-10">
            <h4 className="text-lg font-medium mb-3 text-teal-800">
              My Accounts
            </h4>
            <a href="#" className="text-teal-700">
              My Account
            </a>
            <a href="#" className="text-teal-700">
              Shopping Cart
            </a>
            <a href="#" className="text-teal-700">
              Wishlist
            </a>
            <a href="#" className="text-teal-700">
              Order History
            </a>
            <a href="#" className="text-teal-700">
              International Orders
            </a>
            <a href="#" className="text-teal-700">
              Your account
            </a>
            <a href="#" className="text-teal-700">
              Your orders
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-14 gap-4 sm:gap-0">
        <p className="text-teal-950">© Copyright 2025. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/">
            <img className="h-5" src="./instagram_logo.png" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="h-5" src="./facebook_icon.png" alt="" />
          </a>
          <a href="https://x.com/">
            <img className="h-5" src="./Logo_of_Twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
