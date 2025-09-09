import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoPNG from '../../assets/logo140x40.png';
import CommonButton from '../../components/CommonButton';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact us', path: '/contacts' },
  ];

  return (
    <header className="bg-white text-primary-dark w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logoPNG} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right: Links + Button */}
        <div className="hidden md:flex items-center text-sm font-normal space-x-10">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-normal transition ${
                  location.pathname === link.path
                    ? 'text-[#011E62] font-semibold'
                    : 'text-gray-800 hover:text-shadow-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <CommonButton
            title="Get Started"
            size='medium'
            className="bg-[#011E62] w-40 rounded-full text-white hover:bg-[#011E62]/90 hover:text-blue-950 transition duration-200"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`block font-medium transition ${
                location.pathname === link.path
                  ? 'text-blue-950'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CommonButton
            title="Get Started"
            rightIcon
            className="text-white w-32 text-center mt-3"
          />
        </div>
      )}
    </header>
  );
};

export default NavBar;
