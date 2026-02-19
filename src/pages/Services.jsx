import { SERVICES } from '../data';
import '../index.css';

const Services = () => {
    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="h1">Our Services</h1>
                    <p className="text-lead">End-to-End Digital Solutions for Every Business Need.</p>
                </div>
            </section>

            <div className="container section">
                <div className="services-list">
                    {SERVICES.map((service, index) => (
                        <div key={service.id} className="card fade-in" style={{ marginBottom: '3rem', flexDirection: 'row', gap: '2rem', alignItems: 'start', padding: '3rem' }}>
                            {/* Icon Column */}
                            <div style={{ flex: '0 0 80px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: '50%',
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Text Content Column */}
                            <div style={{ flex: 1 }}>
                                <h2 className="h2" style={{ marginBottom: '1rem' }}>{service.title}</h2>
                                <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '800px' }}>
                                    {service.fullDesc}
                                </p>

                                <div className="grid-2-cols" style={{ gap: '2rem' }}>
                                    <div>
                                        <h4 className="h3" style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Capabilities</h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {service.details.map((detail, i) => (
                                                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                                                    <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }}></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="h3" style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Key Benefits</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                                            {service.benefits}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
