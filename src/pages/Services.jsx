import { Globe, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import '../index.css';

const Services = () => {
    const services = [
        {
            id: "web",
            title: "Website Development",
            icon: <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} src="public/webimage.jpg" alt="" />,
            desc: "We build modern, responsive, and high-performance websites tailored to your brand.",
            details: ["Corporate Websites", "E-commerce Solutions", "Custom Web Applications", "Dashboards & Portals"],
            benefits: "Enhanced online presence, better user engagement, and scalable architecture."
        },
        {
            id: "mobile",
            title: "Mobile App Development",
            icon: <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} src="public/mobileimage.jpg" alt="" />,
            desc: "Native and cross-platform mobile applications for iOS and Android.",
            details: ["iOS & Android Apps", "Cross-Platform (Flutter/React Native)", "UI/UX Design", "App Store Deployment"],
            benefits: "Reach customers continuously, improve brand loyalty, and leverage device capabilities."
        },
        {
            id: "iot",
            title: "IoT Application Development",
            icon: <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} src="public/iotimage.jpg" alt="" />,
            desc: "Connecting devices to the cloud for smart monitoring and automation.",
            details: ["Smart Home/Office Automation", "Industrial IoT", "ESP32 & Arduino Integration", "Real-time Monitoring Dashboards"],
            benefits: "Operational efficiency, data-driven insights, and remote control capabilities."
        },
        {
            id: "support",
            title: "Software Support & Maintenance",
            icon: <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} src="public/itsupportimage.png" alt="" />,
            desc: "Ensuring your software remains secure, up-to-date, and bug-free.",
            details: ["24/7 Monitoring", "Bug Fixes & Patches", "Performance Optimization", "Security Updates"],
            benefits: "Peace of mind, reduced downtime, and extended software lifecycles."
        }
    ];

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
                    {services.map((service, index) => (
                        <div key={service.id} className="service-detail-card" style={{
                            display: 'flex',
                            gap: '3rem',
                            marginBottom: '4rem',
                            flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
                            alignItems: 'center'
                        }}>
                            <div className="service-img-placeholder" style={{
                                flex: 1,
                                height: '300px',
                                background: '#F1F5F9',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--border)'
                            }}>
                                {service.icon}
                            </div>
                            <div className="service-info" style={{ flex: 1 }}>
                                <h2 className="h2">{service.title}</h2>
                                <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{service.desc}</p>

                                <h4 className="h3" style={{ fontSize: '1.25rem' }}>What We Offer:</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                                    {service.details.map(detail => <li key={detail} style={{ marginBottom: '0.5rem' }}>{detail}</li>)}
                                </ul>

                                <h4 className="h3" style={{ fontSize: '1.25rem' }}>Business Benefits:</h4>
                                <p style={{ color: 'var(--text-light)' }}>{service.benefits}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
