import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from "lucide-react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logout } from "../store/actions/clientActions";

const Header = () => {
  const categories = useSelector((state) => state.product.categories);
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <header className="w-full border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Sol - Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">LJ</Link>

        {/* Menü - Masaüstü */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium relative">
          <Link to="/">Home</Link>

          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">
              Shop <ChevronDown size={16} />
            </span>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 p-6 flex gap-12 z-50">
                {/* Kadın */}
                <div>
                  <h4 className="font-bold mb-2">Kadın</h4>
                  <ul className="space-y-1">
                    {womenCategories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`}
                          className="hover:text-blue-500 whitespace-nowrap"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Erkek */}
                <div>
                  <h4 className="font-bold mb-2">Erkek</h4>
                  <ul className="space-y-1">
                    {menCategories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`}
                          className="hover:text-blue-500 whitespace-nowrap"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/team">Team</Link>
          <Link to="/cart">Sepetim</Link>
        </nav>

        {/* Sağ - Giriş ve ikonlar */}
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

          {/* Masaüstü - Kullanıcı Bilgileri */}
          <div className="hidden md:flex items-center gap-4">
            {user?.email ? (
              <>
                {/* Gravatar + İsim */}
                <div className="flex items-center gap-2">
                  <Gravatar email={user.email} size={32} className="rounded-full" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:underline"
                >
                  Çıkış Yap
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  Login 
                </Link>
                <Link
                  to="/signup"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                Register
                </Link>
              </>
            )}

            {/* Sağ ikonlar */}
            <div className="flex items-center gap-4 text-blue-500">
              <Link to="/shop">
                <Search size={20} />
              </Link>
              <Link to="/cart">
                <ShoppingCart size={20} />
              </Link>
              {!user && (
                <Link to="/login">
                  <User size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-2 px-4 py-4 bg-white text-sm font-medium text-gray-700 shadow-md z-50">
          <Link to="/">Home</Link>

          {/* Shop Dropdown Mobile */}
          <div>
            <button
              onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              className="flex items-center gap-1"
            >
              Shop <ChevronDown size={16} />
            </button>
            {isMobileShopOpen && (
              <div className="pl-4 mt-2">
                <h4 className="font-bold">Kadın</h4>
                <ul>
                  {womenCategories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`}
                        className="block py-1"
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold mt-2">Erkek</h4>
                <ul>
                  {menCategories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`}
                        className="block py-1"
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/team">Team</Link>
          <Link to="/cart">Sepetim</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
