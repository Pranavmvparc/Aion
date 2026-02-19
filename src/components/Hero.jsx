import { motion, useReducedMotion } from 'framer-motion';
import SlashMotif from './SlashMotif';
import './Hero.css';

export default function Hero() {
    const MotionDiv = motion.div;
    const MotionH1 = motion.h1;
    const reduceMotion = useReducedMotion();

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
                ease: [0.16, 1, 0.3, 1],
            }
        },
    };

    return (
        <section className="hero-section">
            <MotionDiv
                variants={container}
                initial="hidden"
                animate="show"
                className="hero-inner"
            >
                <MotionH1
                    variants={item}
                    className="hero-title"
                >
                    The AI Infrastructure <br /> Research Lab
                </MotionH1>

                <MotionDiv
                    variants={item}
                    className="hero-motif-wrap"
                >
                    <SlashMotif repeat={2} />
                </MotionDiv>
            </MotionDiv>
        </section>
    );
}
