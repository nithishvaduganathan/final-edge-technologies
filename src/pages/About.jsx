import '../index.css';

const About = () => {
    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container">
                    <h1 className="h1 text-center">About Us</h1>
                    <p className="text-lead text-center">Commitment to Quality, Innovation, and Long-Term Partnerships.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                        <div>
                            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
                                At Final Edge Technologies, our mission is to empower businesses with cutting-edge digital solutions
                                that drive growth and efficiency. We believe in the transformative power of technology to solve
                                complex challenges.
                            </p>
                            <p style={{ color: 'var(--text-light)' }}>
                                We are dedicated to building long-term partnerships with our clients, engaging in every step of the
                                digital transformation journey from concept to deployment and beyond.
                            </p>
                        </div>
                        <div style={{ background: '#E2E8F0', height: '300px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#64748B' }}>[Team/Office Image Placeholder]</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Our Core Values</h2>
                    </div>
                    <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className="card" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                            <h3 className="h3">Innovation</h3>
                            <p style={{ color: 'var(--text-light)' }}>Constantly exploring new technologies to provide the best solutions.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                            <h3 className="h3">Integrity</h3>
                            <p style={{ color: 'var(--text-light)' }}>Transparent communication and honest business practices.</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                            <h3 className="h3">Excellence</h3>
                            <p style={{ color: 'var(--text-light)' }}>Delivering high-quality, bug-free, and performant code.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
