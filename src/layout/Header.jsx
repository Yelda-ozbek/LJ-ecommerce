import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logout } from "../store/actions/clientActions";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    history.push("/"); // anasayfaya yönlendir
  };

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
          <Link to="/cart">Cart</Link>
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
            {user?.email ? (
              <>
                <div className="flex items-center gap-2">
                  <Gravatar email={user.email} className="rounded-full" size={32} />
                  <span className="text-sm font-medium">{user.name || "User"}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:underline"
                >
                  Çıkış Yap
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                Login / Register
              </Link>
            )}

            <div className="flex items-center gap-4 text-blue-500">
              <Link to="/shop">
              <Search size={20} />
              </Link>
              <Link to="/cart">
                <ShoppingCart size={20} />
              </Link>
              <Link to= "/login">
              <User size={20} />
              </Link>
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
          <Link to="/team">Team</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">Cart</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
