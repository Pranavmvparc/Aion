import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlashMotif from './SlashMotif';

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
        <motion.span style={{ color, marginRight: '0.25em' }}>
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
        <motion.span style={{ color, display: 'inline-flex' }}>
            <SlashMotif repeat={1} />
        </motion.span>
    );
};

const Paragraph = ({ text, progress, rangeStart, rangeEnd }) => {
    const words = text.split(" ");
    const amount = rangeEnd - rangeStart;
    const step = amount / words.length;

    return (
        <p style={{
            fontFamily: '"IBM Plex Sans", sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '48px',
            lineHeight: '110%',
            letterSpacing: '0%',
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
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
            style={{
                height: '400vh',
                position: 'relative',
                backgroundColor: 'var(--color-bg)',
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 var(--spacing-container)',
                    overflow: 'hidden'
                }}
            >
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <Paragraph text={text1} progress={scrollYProgress} rangeStart={0.1} rangeEnd={0.45} />

                    <div style={{ height: '3rem' }} />

                    <Paragraph text={text2} progress={scrollYProgress} rangeStart={0.5} rangeEnd={0.85} />

                    <MotionDiv
                        style={{
                            marginTop: '4rem',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}
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
