function ProductCard({ product }) {
  return (
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

        <div className="flex justify-between items-center pt-5">
          <p className="text-slate-500 text-lg font-medium">
            <span>₹</span> {product.price.toLocaleString()}
          </p>
          <button
            type="button"
            onClick={() => console.log(product.name)}
            className="rounded-lg bg-teal-900 hover:bg-teal-600 transition text-white flex items-center justify-center px-4 h-8"
          >
            <span className="pt-1 pb-1.5">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
