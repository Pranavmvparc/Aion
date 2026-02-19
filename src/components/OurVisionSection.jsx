import './OurVisionSection.css';

export default function OurVisionSection() {
    return (
        <section className="ov-section">
            <div className="ov-shell">
                <div className="ov-grid">
                    <div className="ov-visual" aria-hidden="true" />

                    <article className="ov-copy">
                        <h2 className="ov-title">Our Vision</h2>

                        <div className="ov-body">
                            <p className="ov-paragraph">The future of AI shouldn&apos;t be determined by a select few.</p>

                            <p className="ov-paragraph">
                                We believe breakthrough technology should be accessible to anyone building for humanity, not
                                gatekept behind exclusive partnerships or reserved capacity.
                            </p>

                            <p className="ov-paragraph">
                                Whether you need infrastructure, embedded research, or specialized engineers, access should be
                                immediate, transparent, and merit-based.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
