import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <Code2 size={32} color="var(--accent)" />
            <span>Final Edge Technologies</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-desktop">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
           <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
