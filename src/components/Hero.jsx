import { motion, useReducedMotion } from 'framer-motion';
import SlashMotif from './SlashMotif';

export default function Hero() {
    const reduceMotion = useReducedMotion();
    const MotionDiv = motion.div;
    const MotionH1 = motion.h1;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom heavy ease
            }
        },
    };

    return (
        <section id="hero"
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'flex-end', // Aligns the content container to the bottom
                padding: '0 var(--spacing-container) 4rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <MotionDiv
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between', // Text on left, lines on right
                    alignItems: 'flex-end', // Vertical alignment at the bottom
                }}
            >
                <MotionH1
                    variants={item}
                    style={{
                        fontFamily: '"Fraunces", serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '56px',
                        lineHeight: '110%',
                        letterSpacing: '0%',
                        textAlign: 'left', // Ensure text is left-aligned
                        margin: 0, // Reset margin since flex handles spacing
                        maxWidth: '20ch',
                        color: 'var(--color-text)',
                    }}
                >
                    The AI Infrastructure <br /> Research Lab
                </MotionH1>

                <MotionDiv
                    variants={item}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        opacity: 0.6,
                        marginBottom: '0.4em', // Visual alignment with baseline of text
                    }}
                >
                    <SlashMotif repeat={2} />
                </MotionDiv>
            </MotionDiv>
        </section>
    );
}
