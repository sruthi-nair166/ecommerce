function HeroSection() {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-right bg-no-repeat flex flex-col sm:items-start items-center sm:text-start text-center justify-center bg-slate-200 z-0 sm:px-12 px-3"
      style={{ backgroundImage: "url('./hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(224,242,254,0.6)] via-[rgba(224,242,254,0.4)] to-[rgba(224,242,254,0.2)] -z-10"></div>

      <div className="relative z-1">
        <h1 className="text-5xl text-teal-800 font-medium pb-4">
          Discover Products You’ll Love
        </h1>
        <p className="text-lg text-slate-600 pb-6">
          Browse top-rated items, explore categories, and find the best deals in
          one place.
        </p>
        <a
          href="#products"
          className="bg-teal-700 hover:bg-teal-600 transition text-white rounded-full px-5 pt-2 pb-2.5"
        >
          <span>Explore Products</span>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
