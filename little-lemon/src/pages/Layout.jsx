import { Outlet, Link,useNavigate, useLocation  } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';
import { Footer } from '../components/Footer';

export const Layout = (() => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
      <nav className="bg-white shadow shadow-gray-200 fixed w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Little Lemon Logo" className="w-50" />
          </Link>

          <div className="flex gap-10 font-semibold text-grey-900 text-base">
          <Link to="/">HOME</Link>
          <Link to="/"
            onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                const el = document.querySelector('#menu');
                if (el) {
                    window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: 'smooth'
                    });
                }
                } else {
                navigate('/');
                }
            }}
            >
            MENU
            </Link>

            <Link to="/"
            onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                const el = document.querySelector('#about');
                if (el) {
                    window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: 'smooth'
                    });
                }
                } else {
                navigate('/');
                }
            }}
            >
            ABOUT
            </Link>

            <Link to="/reservations">RESERVATIONS</Link>
            <Link to="/order">ORDER ONLINE</Link>
            <Link to="/login">LOGIN</Link>
          </div>

        </div>
      </nav>

      <main className="pt-28 px-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
});
