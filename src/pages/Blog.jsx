import React from "react";

const Blog = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Başlık */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Blog Categories</p>

      <p>Find your style with inspiring content! Fashion tips, style advice and everyday elegance are waiting for you here.
        </p>
      </div>

      {/* Blog Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Kart 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full aspect-[4/3] bg-gray-100">
            <img 
              src="/assets/a1.jpeg" 
              alt="Güçlü ve Şık Kadınlar"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Strong and Stylish Women</h3>
            <p className="text-gray-600 text-sm">
            Get inspired with style tips and stories of confident women.
            </p>
            <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:underline">
  Learn More →
</a>

          </div>
        </div>

        {/* Kart 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full aspect-[4/3] bg-gray-100">
            <img 
              src="/assets/a3.jpeg" 
              alt="Elbise Stil Tüyoları"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Dress Style Tips</h3>
            <p className="text-gray-600 text-sm">
            Discover the best dress choices for different occasions here.
            </p>
            <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:underline">
  Learn More →
</a>

          </div>
        </div>

        {/* Kart 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full aspect-[4/3] bg-gray-100">
            <img 
              src="/assets/a2.jpeg" 
              alt="Günlük Giyimde Şıklık"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Elegance in Everyday Wear</h3>
            <p className="text-gray-600 text-sm">
            Show off your daily style with comfortable but stylish combinations.
            </p>
            <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:underline">
  Learn More →
</a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
