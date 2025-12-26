import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        // Here you would typically send data to a backend
        setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
    };

    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p className="text-lead">Start Your Project with Final Edge Technologies.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <div className="contact-info-card" style={{ background: 'var(--primary)', color: 'var(--white)', padding: '2rem', borderRadius: '1rem' }}>
                                <h3 className="h3" style={{ color: 'var(--white)' }}>Get in Touch</h3>
                                <p style={{ marginBottom: '2rem', color: '#94A3B8' }}>
                                    Have a project in mind? Fill out the form or reach us directly.
                                </p>

                                <ul className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Mail /> <span>finaledgetechnologies@gmail.com</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Phone /> <span>+91 8531977455</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <MapPin /> <span>Thiruvarur, Tamil nadu, India - 609 503</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }}
                                    />
                                </div>

                                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service Required</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit', background: 'var(--white)' }}
                                    >
                                        <option>Website Development</option>
                                        <option>Mobile Application</option>
                                        <option>IoT Solution</option>
                                        <option>Software Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'start' }}>
                                    Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
