const About = () => {
  return (
    <section className="px-4 md:px-20 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Sol: Görsel */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/hakkimizda.jpg" // ✅ string path
            alt="about us"
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* Sağ: Yazı */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600">
            At LJ, we believe that fashion is more than just clothing—it's a lifestyle.  
            Our mission is to empower individuals with timeless designs, modern silhouettes, and premium quality.  
            From everyday essentials to bold statement pieces, LJ brings elegance and confidence to every wardrobe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
