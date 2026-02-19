import { useState } from 'react';

const faqGroups = [
    {
        id: 'compute',
        title: 'Compute',
        questions: [
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: we provide flexible access paths, transparent quotas, and onboarding support for teams of different sizes.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: your workloads can scale across shared and dedicated options without long procurement cycles.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: usage, performance, and availability are surfaced in one view so planning is easier.',
            },
        ],
    },
    {
        id: 'ai-inference',
        title: 'AI Inference',
        questions: [
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: inference endpoints are tuned for low latency and predictable throughput.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: deployments can be configured per use case with controls for failover and autoscaling.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: teams can monitor response quality and service health from a single dashboard.',
            },
        ],
    },
    {
        id: 'products',
        title: 'Products',
        questions: [
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: products are modular, so you can adopt only what your team needs right now.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: each module integrates with common internal tooling and external model providers.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: enterprise workflows are supported through APIs, controls, and managed onboarding.',
            },
        ],
    },
    {
        id: 'pricing',
        title: 'Pricing',
        questions: [
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: pricing is structured around usage with clear visibility into monthly cost drivers.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: teams can start small, then move to committed tiers as demand becomes predictable.',
            },
            {
                question: 'How does aion make compute accessible?',
                answer: 'Placeholder answer: commercial options include support plans and add-ons based on operational needs.',
            },
        ],
    },
];

export default function FaqSection() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (key) => {
        setOpenItems((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <section id="faqs" className="faq-section">
            <div className="faq-shell">
                <h2 className="faq-heading">Frequently Asked Questions</h2>

                <div className="faq-groups">
                    {faqGroups.map((group) => (
                        <section key={group.id} className="faq-group">
                            <div className="faq-group-grid">
                                <h3 className="faq-group-title">{group.title}</h3>

                                <div className="faq-items">
                                    {group.questions.map((item, index) => {
                                        const key = `${group.id}-${index}`;
                                        const answerId = `${key}-answer`;
                                        const questionId = `${key}-question`;
                                        const isOpen = Boolean(openItems[key]);

                                        return (
                                            <article key={key} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                                                <button
                                                    id={questionId}
                                                    type="button"
                                                    className="faq-question"
                                                    aria-expanded={isOpen}
                                                    aria-controls={answerId}
                                                    onClick={() => toggleItem(key)}
                                                >
                                                    <span>{item.question}</span>
                                                    <span className="faq-chevron" aria-hidden="true">⌄</span>
                                                </button>

                                                <div
                                                    id={answerId}
                                                    className={`faq-answer ${isOpen ? 'is-open' : ''}`}
                                                    role="region"
                                                    aria-labelledby={questionId}
                                                >
                                                    <p>{item.answer}</p>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
