const Contact = () => {
    return (
      <section className="px-4 md:px-20 py-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Sol: Açıklama */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-500">
              Lj
            </p>
            <p className="text-gray-500">
              Let us know how we can help you. We're here to answer any questions!
            </p>
          </div>
  
          {/* Sağ: Form */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-4 py-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border rounded px-4 py-2 h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  