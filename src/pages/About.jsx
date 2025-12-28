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
                    <div className="grid-2-cols">
                        <div>
                            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p className="text-muted mb-4">
                                At Final Edge Technologies, our mission is to empower businesses with cutting-edge digital solutions
                                that drive growth and efficiency. We believe in the transformative power of technology to solve
                                complex challenges.
                            </p>
                            <p className="text-muted">
                                We are dedicated to building long-term partnerships with our clients, engaging in every step of the
                                digital transformation journey from concept to deployment and beyond.
                            </p>
                        </div>
                        <div className="about-image-container">
                            <img className="about-image" src="/about_image.png" alt="Our Team" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="h2">Our Core Values</h2>
                    </div>
                    <div className="grid-responsive">
                        <div className="tech-card">
                            <h3 className="h3">Innovation</h3>
                            <p className="text-muted">Constantly exploring new technologies to provide the best solutions.</p>
                        </div>
                        <div className="tech-card">
                            <h3 className="h3">Integrity</h3>
                            <p className="text-muted">Transparent communication and honest business practices.</p>
                        </div>
                        <div className="tech-card">
                            <h3 className="h3">Excellence</h3>
                            <p className="text-muted">Delivering high-quality, bug-free, and performant code.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
