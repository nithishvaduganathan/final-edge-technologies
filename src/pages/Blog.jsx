import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG } from '../data';
import '../index.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch posts from Dev.to API
                const response = await fetch(`https://dev.to/api/articles?username=${COMPANY_CONFIG.devToUsername}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }

                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Unable to load latest articles. Please check back later.");
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="page-container" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loader">Loading technical insights...</div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <section className="section bg-light">
                <div className="container text-center fade-in">
                    <h1 className="h1">Tech Insights</h1>
                    <p className="text-lead">Latest updates, tutorials, and thoughts from our engineering team.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {error ? (
                        <div className="text-center">
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-3">
                            {posts.map((post) => (
                                <article key={post.id} className="card fade-in" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                    {post.cover_image && (
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="blog-img" />
                                        </div>
                                    )}
                                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                            {post.tag_list.slice(0, 3).map(tag => (
                                                <span key={tag} className="tech-badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>#{tag}</span>
                                            ))}
                                        </div>

                                        <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                                            <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {post.title}
                                            </a>
                                        </h3>

                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                                            {post.description}
                                        </p>

                                        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-light)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Calendar size={14} /> {new Date(post.published_at).toLocaleDateString()}
                                            </span>
                                            <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent)', fontWeight: '600' }}>
                                                Read on Dev.to <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {posts.length === 0 && !error && (
                        <div className="text-center">
                            <p>No articles found. Stay tuned!</p>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};

export default Blog;
