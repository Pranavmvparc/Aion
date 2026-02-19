import { motion } from 'framer-motion';
import SlashMotif from './SlashMotif';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }
        },
    };

    return (
        <section
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '0 var(--spacing-container) 4rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}
            >
                <motion.h1
                    variants={item}
                    style={{
                        fontFamily: '"Fraunces", serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '56px',
                        lineHeight: '110%',
                        letterSpacing: '0%',
                        color: 'var(--color-text)',
                        textAlign: 'left',
                        margin: 0,
                        maxWidth: '20ch',
                        color: '#ffffffff',
                    }}
                >
                    The AI Infrastructure <br /> Research Lab
                </motion.h1>

                <motion.div
                    variants={item}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        opacity: 0.6,
                        marginBottom: '0.4em',
                    }}
                >
                    <SlashMotif repeat={2} />
                </motion.div>
            </motion.div>
        </section>
    );
}
