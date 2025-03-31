import { Outlet, Link } from 'react-router-dom';

export const Layout = (() => {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-center gap-8 font-semibold text-gray-800">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/reservations" className="hover:text-yellow-500">Reservations</Link>
          <Link to="/order" className="hover:text-yellow-500">Order Online</Link>
          <Link to="/login" className="hover:text-yellow-500">Login</Link>
        </div>
      </nav>

      <main className="pt-24 px-4 min-h-screen bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-10">
        &copy; 2025 Little Lemon
      </footer>
    </>
  );
});
