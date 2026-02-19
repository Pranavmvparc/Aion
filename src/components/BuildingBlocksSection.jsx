import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import SlashMotif from './SlashMotif';
import componentActive from '../assets/building-blocks/component-active.svg';
import componentInactive from '../assets/building-blocks/component-inactive.svg';
import chipIcon from '../assets/building-blocks/chip.svg';

const steps = [
    {
        id: 'accessible-compute',
        side: 'left',
        title: 'Accessible Compute',
        description: 'Can we type very few words here? Feels like we need very slight.',
    },
    {
        id: 'abstracted-infra',
        side: 'right',
        title: 'Abstracted Infrastructure',
        description: 'Can we type very few words here? Feels like we need very slight.',
    },
    {
        id: 'adaptive-workloads',
        side: 'left',
        title: 'Adaptive Workloads',
        description: 'Can we type very few words here? Feels like we need very slight.',
    },
    {
        id: 'accelerated-research',
        side: 'right',
        title: 'Accelerated Research',
        description: 'Can we type very few words here? Feels like we need very slight.',
    },
    {
        id: 'aion',
        side: 'left',
        title: 'aion.',
        description: 'Can we type very few words here? Feels like we need very slight.',
    },
];

function BuildingCard({ step, active, style }) {
    return (
        <article
            className={`bb-card bb-card-${step.side} ${active ? 'is-active' : ''}`}
            style={style}
            aria-current={active ? 'step' : undefined}
        >
            <span
                className={`bb-card-connector bb-card-connector-${step.id}`}
                aria-hidden="true"
            />
            <div className="bb-card-copy">
                <img className="bb-card-icon" src={chipIcon} alt="" aria-hidden="true" />
                <h3 className="bb-card-title">{step.title}</h3>
                <p className="bb-card-description">{step.description}</p>
            </div>
            <div className="bb-card-pattern" aria-hidden="true" />
        </article>
    );
}

export default function BuildingBlocksSection() {
    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const nextStep = Math.min(steps.length - 1, Math.max(0, Math.floor(latest * steps.length)));
        setActiveStep((prev) => (prev === nextStep ? prev : nextStep));
    });

    const totalProgressMarks = 14;
    const activeProgressMarks = Math.max(
        1,
        Math.round(((activeStep + 1) / steps.length) * totalProgressMarks)
    );
    const inactiveProgressMarks = Math.max(0, totalProgressMarks - activeProgressMarks);

    return (
        <section id="blocks" className="bb-section" ref={sectionRef}>
            <div className="bb-sticky">
                <div className="bb-shell">
                    <header className="bb-header">
                        <div className="bb-header-copy">
                            <h2 className="bb-header-title">Building Blocks</h2>
                            <p className="bb-header-subtitle">
                                The gap isn&apos;t technology-it&apos;s
                                <br />
                                integration, execution, and speed.
                            </p>
                        </div>

                        <div className="bb-header-progress" aria-hidden="true">
                            <SlashMotif repeat={activeProgressMarks} motif="single" className="bb-progress-strong" />
                            {inactiveProgressMarks > 0 ? (
                                <SlashMotif
                                    repeat={inactiveProgressMarks}
                                    motif="single"
                                    className="bb-progress-soft"
                                />
                            ) : null}
                        </div>
                    </header>

                    <div className="bb-main">
                        <div className="bb-desktop-grid">
                            {steps.map((step, index) => (
                                <BuildingCard
                                    key={`desktop-card-${step.id}`}
                                    step={step}
                                    active={index === activeStep}
                                    style={{
                                        gridRow: index + 1,
                                        '--bb-card-shift': index === 1 ? '-77px' : index === 2 ? '-124px' : index === 3 ? '-224px' : index === 4 ? '-274px' : '0px',
                                    }}
                                />
                            ))}

                            {steps.map((step, index) => {
                                const active = index === activeStep;
                                return (
                                    <div
                                        key={`desktop-block-${step.id}`}
                                        className={`bb-stack-block ${active ? 'is-active' : ''}`}
                                        style={{
                                            gridRow: index + 1,
                                            '--bb-stack-index': index,
                                            '--bb-stack-z': steps.length - index,
                                        }}
                                        aria-hidden="true"
                                    >
                                        <img
                                            className="bb-stack-block-image"
                                            src={active ? componentActive : componentInactive}
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bb-mobile-layout">
                            <div className="bb-mobile-stack" aria-hidden="true">
                                {steps.map((step, index) => {
                                    const active = index === activeStep;
                                    return (
                                        <div
                                            key={`mobile-block-${step.id}`}
                                            className={`bb-stack-block ${active ? 'is-active' : ''}`}
                                        >
                                            <img
                                                className="bb-stack-block-image"
                                                src={active ? componentActive : componentInactive}
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bb-mobile-cards">
                                {steps.map((step, index) => (
                                    <BuildingCard
                                        key={`mobile-card-${step.id}`}
                                        step={step}
                                        active={index === activeStep}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
