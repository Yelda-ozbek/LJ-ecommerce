const About = () => {
    return (
      <section className="px-4 md:px-20 py-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Sol: Görsel */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/500x400"
              alt="about us"
              className="w-full rounded-lg shadow"
            />
          </div>
  
          {/* Sağ: Yazı */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600">
              We are a passionate team of developers, designers, and creators building the future of ecommerce experiences. 
            </p>
            <p className="text-gray-600">
              Our mission is to deliver modern, responsive, and engaging UI that connects brands with their customers in the most delightful way.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  