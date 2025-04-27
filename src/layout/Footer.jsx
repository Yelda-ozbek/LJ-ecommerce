import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Üst Bölüm */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          
            LJ
          </Link>

          {/* Sosyal Medya */}
          <div className="flex gap-4 text-blue-500">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Orta Menü */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-600 mb-12">
          <div>
            <h4 className="font-bold mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          {/* E-Mail Kısmı */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-3 py-2 w-full rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
           
          </div>
        </div>

        {/* Alt Copyright */}
        <div className="text-center text-xs text-gray-400">
          Made with ❤️ by LJ | All rights reserved © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
