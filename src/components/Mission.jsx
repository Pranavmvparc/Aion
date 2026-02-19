import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlashMotif from './SlashMotif';
import './Mission.css';

const text1 = "We design, build, and deploy the systems that turn research into enterprise-grade AI.";
const text2 = "From models to infrastructure, we close the gap between pilot and production.";

const Word = ({ children, progress, range }) => {
    const color = useTransform(
        progress,
        [range[0], range[1]],
        ['rgb(158, 158, 158)', 'rgb(17, 17, 17)'],
        { clamp: true }
    );

    return (
        <motion.span className="mission-word" style={{ color }}>
            {children}
        </motion.span>
    );
};

const MotifPiece = ({ progress, range }) => {
    const color = useTransform(
        progress,
        [range[0], range[1]],
        ['rgb(158, 158, 158)', 'rgb(17, 17, 17)'],
        { clamp: true }
    );

    return (
        <motion.span className="mission-motif-piece" style={{ color }}>
            <SlashMotif repeat={1} />
        </motion.span>
    );
};

const Paragraph = ({ text, progress, rangeStart, rangeEnd }) => {
    const words = text.split(" ");
    const amount = rangeEnd - rangeStart;
    const step = amount / words.length;

    return (
        <p className="mission-paragraph">
            {words.map((word, i) => {
                const start = rangeStart + (i * step);
                const end = start + (step * 0.9);

                return (
                    <Word key={i} progress={progress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};

export default function Mission() {
    const MotionDiv = motion.div;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });
    const motifCount = 14;
    const motifRangeStart = 0.5;
    const motifRangeEnd = 0.85;
    const motifAmount = motifRangeEnd - motifRangeStart;
    const motifStep = motifAmount / motifCount;

    return (
        <section
            id="mission"
            ref={containerRef}
            className="mission-section"
        >
            <div className="mission-sticky">
                <div className="mission-shell">
                    <Paragraph text={text1} progress={scrollYProgress} rangeStart={0.1} rangeEnd={0.45} />

                    <div className="mission-spacer" />

                    <Paragraph text={text2} progress={scrollYProgress} rangeStart={0.5} rangeEnd={0.85} />

                    <MotionDiv
                        className="mission-divider"
                    >
                        <span className="slash-motif-row" aria-hidden="true">
                            {Array.from({ length: motifCount }, (_, i) => {
                                const start = motifRangeStart + (i * motifStep);
                                const end = start + (motifStep * 0.9);

                                return (
                                    <MotifPiece key={i} progress={scrollYProgress} range={[start, end]} />
                                );
                            })}
                        </span>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
