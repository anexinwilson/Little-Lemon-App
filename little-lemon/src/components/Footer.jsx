/* Footer component with logo, sitemap, contact info, and social links */
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/images/logo-white.png';

export const Footer = () => {
  /* Renders a grid layout: 1 col on mobile, 2 cols on sm, 4 cols on md screens */
  return (
    <footer className="bg-gray-600 text-white py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Little Lemon Logo" className="w-24" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-yellow-400">Reservations</Link></li>
            <li><Link to="/order" className="hover:text-yellow-400">Order Online</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2 flex items-center gap-2"><MapPin size={16} />123 Olive Street, Seattle, WA</p>
          <p className="mb-2 flex items-center gap-2"><Phone size={16} />(206) 555-7890</p>
          <p className="flex items-center gap-2"><Mail size={16} />hello@littlelemon.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};