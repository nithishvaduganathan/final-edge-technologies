import React from 'react';
import '../index.css';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1553877616-15280ed4be8b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    ];

    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center fade-in">
                    <h1 className="h1">Life at Final Edge</h1>
                    <p className="text-lead">Behind the scenes, team events, and our creative culture.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ columns: '3 300px', columnGap: '1.5rem' }}>
                        {images.map((src, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem', breakInside: 'avoid', overflow: 'hidden', borderRadius: '1rem' }} className="fade-in">
                                <img
                                    src={src}
                                    alt={`Gallery ${index}`}
                                    style={{ width: '100%', borderRadius: '1rem', transition: 'transform 0.3s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
