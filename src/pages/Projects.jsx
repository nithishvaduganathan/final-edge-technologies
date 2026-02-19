import { PROJECTS } from '../data';
import '../index.css';

const Projects = () => {
    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center fade-in">
                    <h1 className="h1">Our Projects</h1>
                    <p className="text-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Showcasing our best work in Web, Mobile, and IoT solutions.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="grid grid-3 text-center">
                        <div className="card" style={{ padding: '2rem', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                            <h2 className="h1" style={{ marginBottom: '0.5rem' }}>20+</h2>
                            <p className="text-muted">Successful Projects</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                            <h2 className="h1" style={{ marginBottom: '0.5rem' }}>30+</h2>
                            <p className="text-muted">Client Connections</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                            <h2 className="h1" style={{ marginBottom: '0.5rem' }}>100%</h2>
                            <p className="text-muted">Better Results</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {PROJECTS.map((project) => (
                            <div key={project.id} className="card fade-in">
                                <div style={{ height: '200px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="project-img" />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: 'var(--accent)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="h3">{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{
                                            background: '#F1F5F9',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '1rem',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-main)'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
