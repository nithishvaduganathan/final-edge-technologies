import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <Code2 size={28} color="var(--accent)" />
                            <span>Final Edge</span>
                        </Link>
                        <p className="footer-desc">
                            Building smart digital solutions for modern businesses. We deliver scalable, secure, and innovative technology.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">Mobile Apps</Link></li>
                            <li><Link to="/services">IoT Solutions</Link></li>
                            <li><Link to="/services">Cloud Services</Link></li>
                            <li><Link to="/services">Support & Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <Mail size={16} />
                                <span>contact@finaledge.com</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>123 Tech Park, Innovation City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Final Edge Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
