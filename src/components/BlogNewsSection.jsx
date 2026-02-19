import './BlogNewsSection.css';

const cards = [
    {
        id: 'feature-left',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'feature',
    },
    {
        id: 'top-right-a',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'regular',
    },
    {
        id: 'top-right-b',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'regular',
    },
    {
        id: 'bottom-a',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'regular',
    },
    {
        id: 'bottom-b',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'regular',
    },
    {
        id: 'bottom-c',
        title: 'We\'ve raised $100m for our Series A',
        description: 'Can we type very few words here? Feels like we need very slight.',
        date: 'Feb 4, 2026',
        variant: 'regular',
    },
];

function BlogCard({ card }) {
    return (
        <article className={`bn-card bn-card-${card.variant}`}>
            <div className="bn-media" aria-hidden="true">
                <div className="bn-media-meta">
                    <span className="bn-tag">Announcements</span>
                    <span className="bn-date">{card.date}</span>
                </div>
            </div>

            <div className="bn-copy">
                <h3 className="bn-card-title">{card.title}</h3>
                <p className="bn-card-description">{card.description}</p>
                <button type="button" className="bn-read-btn">Read Article</button>
            </div>
        </article>
    );
}

export default function BlogNewsSection() {
    return (
        <section id="blog" className="bn-section">
            <div className="bn-shell">
                <h2 className="bn-heading">Blog and News</h2>

                <div className="bn-top-grid">
                    <BlogCard card={cards[0]} />

                    <div className="bn-right-stack">
                        <BlogCard card={cards[1]} />
                        <BlogCard card={cards[2]} />
                    </div>
                </div>

                <div className="bn-bottom-grid">
                    <BlogCard card={cards[3]} />
                    <BlogCard card={cards[4]} />
                    <BlogCard card={cards[5]} />
                </div>

                <button type="button" className="bn-view-btn">View Blog</button>
            </div>
        </section>
    );
}
