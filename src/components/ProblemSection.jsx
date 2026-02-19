import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import SlashMotif from './SlashMotif';

const paragraphs = [
    '88% of enterprises experiment with AI, yet only 7% reach production scale.',
    'Most teams stall between pilot momentum and production reliability.',
    'Execution speed, integration quality, and deployment discipline are the real differentiators.',
];

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const STEP_REVEAL_PORTION = 0.62;
const TOTAL_DIVIDER_SLASHES = 112;

const interpolateSlashColor = (strength) => {
    const t = clamp01(strength);
    const start = 188;
    const end = 15;
    const channel = Math.round(start + (end - start) * t);
    return `rgb(${channel}, ${channel}, ${channel})`;
};

const getMotifPieceStrength = (index, totalCount, progress) => {
    const slot = 1 / totalCount;
    const start = index * slot;
    const end = start + slot * 0.92;

    return clamp01((progress - start) / (end - start));
};

const ParagraphWordFade = ({ text, progress, className, style }) => {
    const words = text.split(' ');
    const activeWords = Math.min(words.length, Math.floor(progress * words.length));

    return (
        <p className={className} style={style}>
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className={`problem-copy-word ${index < activeWords ? 'is-active' : ''}`}
                >
                    {word}
                    {index < words.length - 1 ? ' ' : ''}
                </span>
            ))}
        </p>
    );
};

export default function ProblemSection() {
    const sectionRef = useRef(null);
    const [stepState, setStepState] = useState({ activeStep: 0, stepProgress: 0 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const clamped = clamp01(latest);
        const scaled = clamped * paragraphs.length;
        const activeStep = Math.min(paragraphs.length - 1, Math.floor(scaled));
        const baseProgress = scaled - activeStep;
        const stepProgress = clamp01(baseProgress / STEP_REVEAL_PORTION);

        setStepState((prev) => {
            if (prev.activeStep === activeStep && Math.abs(prev.stepProgress - stepProgress) < 0.001) {
                return prev;
            }

            return { activeStep, stepProgress };
        });
    });

    const { activeStep, stepProgress } = stepState;
    const displayedStep = activeStep + 1;
    const progressRatio = clamp01((activeStep + stepProgress) / paragraphs.length);
    const motifPieces = Array.from({ length: TOTAL_DIVIDER_SLASHES }, (_, index) => {
        const strength = getMotifPieceStrength(index, TOTAL_DIVIDER_SLASHES, progressRatio);
        return {
            key: `problem-divider-piece-${index}`,
            color: interpolateSlashColor(strength),
        };
    });

    return (
        <section className="problem-section" ref={sectionRef}>
            <div className="problem-sticky">
                <div className="problem-shell">
                    <h2 className="problem-title">
                        <span className="problem-title-line">The problem</span>
                        <br />
                        with AI
                    </h2>

                    <div className="problem-divider" aria-hidden="true">
                        <div className="problem-divider-track">
                            {motifPieces.map((piece) => (
                                <span key={piece.key} className="problem-divider-piece" style={{ color: piece.color }}>
                                    <SlashMotif repeat={1} motif="single" />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="problem-main">
                        <div className="problem-step">{displayedStep}/3</div>

                        <div className="problem-copy-wrap">
                            <div className="problem-copy-stack" aria-live="polite">
                                <ParagraphWordFade
                                    text={paragraphs[activeStep]}
                                    progress={stepProgress}
                                    className="problem-copy problem-copy-layer"
                                    style={{ opacity: 1 }}
                                />
                            </div>

                            <div className="problem-grid" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
