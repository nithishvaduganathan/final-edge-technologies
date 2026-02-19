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

    const [status, setStatus] = useState({ loading: false, error: '', success: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: '', success: '' });

        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            setStatus({ loading: false, error: 'Telegram configuration is missing.', success: '' });
            return;
        }

        const text = `
New Contact Form Submission:
---------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });

            const data = await response.json();

            if (!data.ok) {
                throw new Error(data.description || 'Failed to send message to Telegram.');
            }

            setStatus({ loading: false, error: '', success: 'Message sent successfully!' });
            setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });

        } catch (err) {
            console.error(err);
            setStatus({ loading: false, error: 'Failed to send message. Please try again later.', success: '' });
        }
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
                    <div className="contact-layout">

                        {/* Contact Info */}
                        <div>
                            <div className="contact-info-card">
                                <h3 className="h3" style={{ color: 'var(--white)' }}>Get in Touch</h3>
                                <p style={{ marginBottom: '2rem', color: '#94A3B8' }}>
                                    Have a project in mind? Fill out the form or reach us directly.
                                </p>

                                <ul className="contact-details">
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
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid-2-cols" style={{ gap: '1.5rem', alignItems: 'start' }}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Required</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="form-select"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option>Website Development</option>
                                        <option>Mobile Application</option>
                                        <option>IoT Solution</option>
                                        <option>Software Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    {status.error && <p style={{ color: 'red' }}>{status.error}</p>}
                                    {status.success && <p style={{ color: 'green' }}>{status.success}</p>}
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'start' }} disabled={status.loading}>
                                    {status.loading ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '8px' }} />
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
