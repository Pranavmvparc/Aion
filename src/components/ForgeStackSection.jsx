import { useState } from 'react';
import { motion } from 'framer-motion';
import SlashMotif from './SlashMotif';

const slides = [
    {
        id: 'deploy',
        title: 'Deploy AI infrastructure',
        description:
            'Across bare-metal or Kubernetes with one developer experience and maximize performance across GPU workloads.',
    },
    {
        id: 'cost',
        title: 'Control costs transparently',
        description:
            'With usage-based pricing, zero hidden fees, and no vendor lock-in across any infrastructure.',
    },
    {
        id: 'observe',
        title: 'Observe every workload',
        description:
            'Track cluster health, queue pressure, and model latency with built-in observability at every layer.',
    },
    {
        id: 'secure',
        title: 'Secure production by default',
        description:
            'Run isolated workloads with policy guardrails and governance controls designed for regulated teams.',
    },
];

function FeatureCard({ slide }) {
    return (
        <div className="forge-feature-card">
            <h3 className="forge-slide-title">{slide.title}</h3>
            <div className={`forge-slide-visual forge-slide-visual-${slide.id}`} aria-hidden="true" />
            <p className="forge-slide-description">{slide.description}</p>
        </div>
    );
}

export default function ForgeStackSection() {
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
        <section id="forge" className="forge-stack-section">
            <div className="forge-shell">
                <div className="forge-top-grid">
                    <article className="forge-info-panel">
                        <div className="forge-eyebrow-row">
                            <span className="forge-eyebrow">aion Forge</span>
                            <SlashMotif repeat={7} motif="single" className="forge-eyebrow-slash" />
                        </div>

                        <h2 className="forge-title">
                            The Integrated
                            <br />
                            AI Stack
                        </h2>

                        <p className="forge-lead">Build the best models, not wrestle infrastructure.</p>
                        <p className="forge-body">
                            Forge is the most powerful, optimized AI cloud, unlocking AI infrastructure at scale with no
                            wait times.
                        </p>
                        <p className="forge-body">
                            Deploy high-performance clusters in minutes with no vendor lock-ins, zero complexity, and
                            complete price transparency.
                        </p>

                        <button className="forge-cta" type="button">
                            <span>Access the Platform</span>
                            <span className="forge-cta-arrow">&gt;</span>
                        </button>
                    </article>

                    <div className="forge-gutter-motif" aria-hidden="true">
                        <SlashMotif repeat={41} className="forge-gutter-slash-row" />
                    </div>

                    <div className="forge-visual-frame">
                        <div className="forge-visual-placeholder">
                            <span>VISUAL HERE</span>
                            <span>(1.7:1)</span>
                        </div>
                    </div>
                </div>

                <div className="forge-divider-row">
                    <div className="forge-divider-line" aria-hidden="true">
                        <SlashMotif repeat={2} className="forge-divider-strong" />
                        <SlashMotif repeat={34} className="forge-divider-soft" />
                    </div>
                    <div className="forge-step-chip">
                        {activeIndex + 1}/{slides.length}
                    </div>
                    <div className="carousel-controls">
                        <button
                            type="button"
                            className="carousel-control-btn"
                            onClick={goToPrevious}
                            disabled={activeIndex === 0}
                            aria-label="Show previous Forge slide"
                        >
                            Prev
                        </button>
                        <button
                            type="button"
                            className="carousel-control-btn"
                            onClick={goToNext}
                            disabled={activeIndex === slides.length - 1}
                            aria-label="Show next Forge slide"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div
                    className="forge-carousel"
                    aria-roledescription="carousel"
                    aria-label="Forge capabilities carousel"
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
                        className="forge-track"
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
                                className="forge-slide"
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
