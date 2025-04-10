const ProductDetail = () => {
    return (
      <section className="px-4 md:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* SOL - GÖRSEL */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400x400?text=Graphic+Design"
              alt="Product"
              className="w-full rounded-xl shadow"
            />
          </div>
  
          {/* SAĞ - BİLGİLER */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Graphic Design</h1>
            <p className="text-sm text-gray-500 mb-4">English Department</p>
  
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-600 font-bold text-lg">$6.48</span>
              <span className="line-through text-gray-400 text-sm">$16.48</span>
            </div>
  
            <div className="flex gap-2 mb-6">
              <span className="w-6 h-6 rounded-full bg-green-600 border border-gray-300"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-6 h-6 rounded-full bg-orange-500 border border-gray-300"></span>
              <span className="w-6 h-6 rounded-full bg-black border border-gray-300"></span>
            </div>
  
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductDetail;
  