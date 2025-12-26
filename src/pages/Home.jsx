import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Building Smart Digital Solutions for Modern Businesses</h1>
                        <p className="hero-subtitle">
                            Web, Mobile, IoT & Software Solutions Tailored for Growth.
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Get a Free Consultation <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Final Edge */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Why Final Edge Technologies?</h2>
                        <p className="section-desc">We deliver excellence through technology and innovation.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Scalable & Secure</h3>
                            <p>We build systems that grow with your business and keep your data safe.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Globe size={32} /></div>
                            <h3>Client-Focused</h3>
                            <p>Your success is our priority. We work as your technical partners.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Cpu size={32} /></div>
                            <h3>Modern Tech Stack</h3>
                            <p>Leveraging the latest technologies for high performance.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Smartphone size={32} /></div>
                            <h3>End-to-End Support</h3>
                            <p>From concept to deployment and long-term maintenance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Our Expertise</h2>
                        <p className="section-desc">Comprehensive digital solutions for every need.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><Globe size={40} color="var(--accent)" /></div>
                            <h3>Website Development</h3>
                            <p>Corporate websites, portfolios, custom dashboards, and web applications built with React and modern tools.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Smartphone size={40} color="var(--accent)" /></div>
                            <h3>Mobile App Development</h3>
                            <p>Native functionality with cross-platform efficiency using Flutter and React Native. iOS and Android.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Cpu size={40} color="var(--accent)" /></div>
                            <h3>IoT Solutions</h3>
                            <p>Smart device integration, sensor monitoring systems, and automation logic using ESP32 and Cloud.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><ShieldCheck size={40} color="var(--accent)" /></div>
                            <h3>Software Support</h3>
                            <p>Bug fixing, upgrades, server monitoring, and long-term technical support to ensure stability.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
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
