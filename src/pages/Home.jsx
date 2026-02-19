import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT, ABOUT_CONTENT, SERVICES } from '../data';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section - Optimized for Text */}
            <section className="hero" style={{ minHeight: '60vh', padding: '6rem 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ maxWidth: '800px' }}>
                        <h1 className="hero-title">{HERO_CONTENT.title}</h1>
                        <p className="hero-subtitle">
                            {HERO_CONTENT.subtitle}
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">
                                {HERO_CONTENT.primaryAction} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                {HERO_CONTENT.secondaryAction}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Text Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Why Final Edge Technologies?</h2>
                        <p className="section-desc">We deliver excellence through technology and innovation.</p>
                    </div>

                    <div className="features-grid">
                        {ABOUT_CONTENT.values.map((value, index) => (
                            <div key={index} className="feature-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="icon-box">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview - Data Driven */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Our Expertise</h2>
                        <p className="section-desc">Comprehensive digital solutions for every need.</p>
                    </div>

                    <div className="services-grid">
                        {SERVICES.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                                <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">Let’s Build Your Next Digital Product</h2>
                    <p className="cta-subtitle">Ready to transform your business with cutting-edge technology?</p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
