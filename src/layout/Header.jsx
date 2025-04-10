import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Sol - Logo */}
        <div className="text-2xl font-bold text-gray-800">LJ</div>

        {/* Menü - Desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </nav>

        {/* Sağ - Login ve ikonlar */}
        <div className="flex items-center gap-6">
          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Login + Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-blue-500 text-sm font-medium hover:underline">
              Login / Register
            </button>
            <div className="flex items-center gap-4 text-blue-500">
              <Search size={20} />
              <ShoppingCart size={20} />
              <User size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobil Menü Açılır */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white text-sm font-medium text-gray-700 shadow-md">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/contact">Contact</Link>

        </div>
      )}
    </header>
  );
};

export default Header;
