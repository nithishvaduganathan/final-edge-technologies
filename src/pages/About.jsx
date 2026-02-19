import { ABOUT_CONTENT } from '../data';
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
                    <div className="grid-2-cols" style={{ alignItems: 'start' }}>
                        <div>
                            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>{ABOUT_CONTENT.mission.title}</h2>
                            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                {ABOUT_CONTENT.mission.text}
                            </p>

                            <h3 className="h3" style={{ marginTop: '2rem' }}>Who We Are</h3>
                            <p className="text-muted" style={{ fontSize: '1rem' }}>
                                Founded with a vision to bridge the gap between complex technology and business needs, Final Edge Technologies has grown into a full-service digital agency. We pride ourselves on being more than just developers; we are strategic partners who understand the market dynamics and the importance of ROI.
                            </p>
                        </div>
                        {/* Replaced large image with text-heavy "Our Process" card or smaller image if needed */}
                        <div className="card bg-light" style={{ border: 'none' }}>
                            <h3 className="h3">Why We Stand Out</h3>
                            <ul style={{ listStyle: 'none', space: '1rem' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>01.</span>
                                    <span><strong>Client-Centric Approach:</strong> We don't just write code; we solve business problems.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>02.</span>
                                    <span><strong>Agile Methodology:</strong> Flexible, iterative development ensuring we adapt to your feedback.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>03.</span>
                                    <span><strong>Future-Proof Tech:</strong> We use modern stacks that scale with your growth.</span>
                                </li>
                            </ul>
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
                        {ABOUT_CONTENT.values.map((value, index) => (
                            <div key={index} className="tech-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{value.icon}</div>
                                <h3 className="h3">{value.title}</h3>
                                <p className="text-muted">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
