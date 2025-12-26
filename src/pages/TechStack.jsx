import '../index.css';

const TechStack = () => {
    const stacks = [
        {
            category: "Frontend",
            techs: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind / Vanilla CSS"]
        },
        {
            category: "Backend",
            techs: ["Node.js", "Express", "Python", "Django/Flask"]
        },
        {
            category: "Mobile",
            techs: ["Flutter", "React Native", "Android (Kotlin/Java)"]
        },
        {
            category: "IoT & Hardware",
            techs: ["ESP32", "Arduino", "MQTT", "Sensors & Actuators"]
        },
        {
            category: "Database & Cloud",
            techs: ["PostgreSQL", "MongoDB", "Firebase", "AWS / Google Cloud"]
        }
    ];

    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="h1">Technology Stack</h1>
                    <p className="text-lead">We use the latest tools and frameworks to build robust solutions.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {stacks.map((stack) => (
                            <div key={stack.category} className="tech-card" style={{
                                padding: '2rem',
                                border: '1px solid var(--border)',
                                borderRadius: '1rem',
                                background: 'var(--white)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <h3 className="h3" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>
                                    {stack.category}
                                </h3>
                                <div className="tech-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {stack.techs.map(tech => (
                                        <span key={tech} style={{
                                            background: '#EFF6FF',
                                            color: 'var(--accent-dark)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '2rem',
                                            fontWeight: '500',
                                            fontSize: '0.9rem'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechStack;
