import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import { Footer } from '../components/Footer';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path, scrollId) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/' && scrollId) {
      const el = document.querySelector(`#${scrollId}`);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className="bg-white shadow shadow-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Little Lemon Logo" className="w-32 md:w-50" />
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-10 font-semibold text-gray-900 text-base">
            <Link to="/" onClick={handleLinkClick('/', null)}>HOME</Link>
            <Link to="/" onClick={handleLinkClick('/', 'menu')}>MENU</Link>
            <Link to="/" onClick={handleLinkClick('/', 'about')}>ABOUT</Link>
            <Link to="/reservations">RESERVATIONS</Link>
            <Link to="/order">ORDER ONLINE</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col gap-4 font-semibold text-gray-900 text-base px-6 py-4">
              <Link to="/" onClick={handleLinkClick('/', null)}>HOME</Link>
              <Link to="/" onClick={handleLinkClick('/', 'menu')}>MENU</Link>
              <Link to="/" onClick={handleLinkClick('/', 'about')}>ABOUT</Link>
              <Link to="/reservations" onClick={() => setMenuOpen(false)}>RESERVATIONS</Link>
              <Link to="/order" onClick={() => setMenuOpen(false)}>ORDER ONLINE</Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-28 px-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
