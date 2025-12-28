import { Code, Server, Smartphone, Cpu, Database } from 'lucide-react';
import '../index.css';

const TechStack = () => {
    const stacks = [
        {
            category: "Frontend",
            icon: Code,
            techs: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind / Vanilla CSS"]
        },
        {
            category: "Backend",
            icon: Server,
            techs: ["Node.js", "Express", "Python", "Django/Flask"]
        },
        {
            category: "Mobile",
            icon: Smartphone,
            techs: ["Flutter", "React Native", "Android (Kotlin/Java)"]
        },
        {
            category: "IoT & Hardware",
            icon: Cpu,
            techs: ["ESP32", "Arduino", "MQTT", "Sensors & Actuators"]
        },
        {
            category: "Database & Cloud",
            icon: Database,
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
                    <div className="grid-responsive">
                        {stacks.map((stack) => {
                            const Icon = stack.icon;
                            return (
                                <div key={stack.category} className="tech-card">
                                    <div className="tech-header">
                                        <h3 className="h3" style={{ marginBottom: 0 }}>
                                            {stack.category}
                                        </h3>
                                        <Icon size={24} color="var(--accent)" />
                                    </div>
                                    <div className="tech-list">
                                        {stack.techs.map(tech => (
                                            <span key={tech} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechStack;
