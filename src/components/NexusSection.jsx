import { useState } from 'react';
import { motion } from 'framer-motion';
import SlashMotif from './SlashMotif';

const slides = [
    {
        id: 'manage',
        title: 'Manage and optimize AI models',
        description:
            'With a unified control plane for benchmarking, fine-tuning, and optimizations (quantisations).',
    },
    {
        id: 'validate',
        title: 'Validate and deploy in weeks',
        description:
            'With our Forward Deployed Engineers through a 14-day bootcamp that builds MVP on your data and moves you from pilot to production in 3 months.',
    },
    {
        id: 'monitor',
        title: 'Monitor every model endpoint',
        description:
            'Track model quality, regressions, and latency in one place while teams ship updates continuously.',
    },
    {
        id: 'scale',
        title: 'Scale with your AI team',
        description:
            'Operationalize AI systems with embedded forward-deployed engineers and reliable delivery workflows.',
    },
];

function FeatureCard({ slide }) {
    return (
        <div className="nexus-feature-card">
            <h3 className="nexus-slide-title">{slide.title}</h3>
            <div className={`nexus-slide-visual nexus-slide-visual-${slide.id}`} aria-hidden="true" />
            <p className="nexus-slide-description">{slide.description}</p>
        </div>
    );
}

export default function NexusSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const MotionDiv = motion.div;

    const goToPrevious = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToNext = () => {
        setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
    };

    const onDragEnd = (_, info) => {
        const swipeLeft = info.offset.x < -90 || info.velocity.x < -600;
        const swipeRight = info.offset.x > 90 || info.velocity.x > 600;

        if (swipeLeft) {
            goToNext();
            return;
        }

        if (swipeRight) {
            goToPrevious();
        }
    };

    return (
        <section id="nexus" className="nexus-section">
            <div className="nexus-shell">
                <div className="nexus-top-grid">
                    <div className="nexus-visual-frame">
                        <div className="nexus-visual-placeholder">
                            <span>VISUAL HERE</span>
                            <span>(1.7:1)</span>
                        </div>
                    </div>

                    <div className="nexus-gutter-motif" aria-hidden="true">
                        <SlashMotif repeat={41} className="nexus-gutter-slash-row" />
                    </div>

                    <article className="nexus-info-panel">
                        <div className="nexus-eyebrow-row">
                            <span className="nexus-eyebrow">aion Nexus</span>
                            <SlashMotif repeat={7} motif="single" className="nexus-eyebrow-slash" />
                        </div>

                        <h2 className="nexus-title">
                            Your forward
                            <br />
                            deployed AI Team
                        </h2>

                        <p className="nexus-lead">Build, optimize, and serve AI models and agents at scale.</p>
                        <p className="nexus-body">
                            Nexus is your full-stack enterprise AI product suite, backed by embedded forward-deployed
                            engineers and researchers. We build, fine-tune, and deploy custom models and agents,
                            operationalizing AI systems built for production.
                        </p>

                        <button className="nexus-cta" type="button">
                            <span>Access the Platform</span>
                            <span className="nexus-cta-arrow">&gt;</span>
                        </button>
                    </article>
                </div>

                <div className="nexus-divider-row">
                    <div className="nexus-divider-line" aria-hidden="true">
                        <SlashMotif repeat={2} className="nexus-divider-strong" />
                        <SlashMotif repeat={34} className="nexus-divider-soft" />
                    </div>
                    <div className="nexus-step-chip">
                        {activeIndex + 1}/{slides.length}
                    </div>
                    <div className="carousel-controls">
                        <button
                            type="button"
                            className="carousel-control-btn"
                            onClick={goToPrevious}
                            disabled={activeIndex === 0}
                            aria-label="Show previous Nexus slide"
                        >
                            Prev
                        </button>
                        <button
                            type="button"
                            className="carousel-control-btn"
                            onClick={goToNext}
                            disabled={activeIndex === slides.length - 1}
                            aria-label="Show next Nexus slide"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div
                    className="nexus-carousel"
                    aria-roledescription="carousel"
                    aria-label="Nexus capabilities carousel"
                    onKeyDown={(event) => {
                        if (event.key === 'ArrowLeft') {
                            goToPrevious();
                        }

                        if (event.key === 'ArrowRight') {
                            goToNext();
                        }
                    }}
                >
                    <MotionDiv
                        className="nexus-track"
                        tabIndex={0}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.08}
                        onDragEnd={onDragEnd}
                        animate={{ x: `-${activeIndex * 100}%` }}
                        transition={{ type: 'spring', stiffness: 330, damping: 36, mass: 0.4 }}
                    >
                        {slides.map((slide, index) => (
                            <article
                                key={slide.id}
                                className="nexus-slide"
                                aria-label={`Slide ${index + 1} of ${slides.length}`}
                                aria-hidden={index !== activeIndex}
                            >
                                <FeatureCard slide={slide} />
                                <FeatureCard slide={slides[(index + 1) % slides.length]} />
                            </article>
                        ))}
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
