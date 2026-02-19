import { motion } from 'framer-motion';

const navLinks = ['Forge', 'Nexus', 'Pricing', 'Blog', 'FAQs'];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem var(--spacing-container)',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                pointerEvents: 'none',
            }}
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '4px',
                    fontWeight: 400,
                    pointerEvents: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.08767 16.8986C3.41917 16.8986 0 13.0849 0 8.41645C0 3.81373 3.68219 0 8.58083 0C13.4465 0 17.1616 3.61645 17.1616 8.41645V16.5041H14.0712V13.6767C12.8548 15.6493 10.7178 16.8986 8.08767 16.8986ZM8.58083 13.8082C11.6054 13.8082 13.9068 11.3754 13.9068 8.44928C13.9068 5.49037 11.6054 3.05754 8.58083 3.05754C5.58904 3.05754 3.25479 5.49037 3.25479 8.44928C3.25479 11.3754 5.58904 13.8082 8.58083 13.8082Z" fill="url(#paint0_radial_1_997)" />
                        <defs>
                            <radialGradient id="paint0_radial_1_997" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.736 -7.10137) rotate(90) scale(27.744 45.2767)">
                                <stop offset="0.115385" stopColor="#73E1D0" />
                                <stop offset="1" stopColor="#4CA154" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <svg width="5" height="24" viewBox="0 0 5 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.13696 4.30685C0.953377 4.30685 0 3.35342 0 2.16987C0 0.986304 0.953377 0 2.13696 0C3.32054 0 4.24109 0.986304 4.24109 2.16987C4.24109 3.35342 3.32054 4.30685 2.13696 4.30685ZM0.525984 7.49589H3.78077V23.6054H0.525984V7.49589Z" fill="url(#paint0_radial_i)" />
                        <defs>
                            <radialGradient id="paint0_radial_i" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.2737 1.65367e-06) rotate(90) scale(27.744 45.2767)">
                                <stop offset="0.115385" stopColor="#73E1D0" />
                                <stop offset="1" stopColor="#4CA154" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.6137 16.8986C3.74794 16.8986 0 13.0849 0 8.41645C0 3.78081 3.78077 0 8.6137 0C13.4795 0 17.1616 3.81373 17.1616 8.41645C17.1616 13.0849 13.4465 16.8986 8.6137 16.8986ZM8.6137 13.8082C11.6054 13.8082 13.9068 11.3754 13.9068 8.44928C13.9068 5.49037 11.6054 3.05754 8.6137 3.05754C5.58903 3.05754 3.25478 5.49037 3.25478 8.44928C3.25478 11.3754 5.58903 13.8082 8.6137 13.8082Z" fill="url(#paint0_radial_o)" />
                        <defs>
                            <radialGradient id="paint0_radial_o" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.70301 -7.10137) rotate(90) scale(27.744 45.2767)">
                                <stop offset="0.115385" stopColor="#73E1D0" />
                                <stop offset="1" stopColor="#4CA154" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.98902 3.1233C4.83283 3.1233 3.25478 5.72058 3.25478 8.71233V16.5041H0V8.38353C0 3.68221 2.79446 0 7.98902 0C13.2492 0 16.1096 3.68221 16.1096 8.35069V16.5041H12.8548V8.74516C12.8548 5.72058 11.211 3.1233 7.98902 3.1233Z" fill="url(#paint0_radial_n)" />
                        <defs>
                            <radialGradient id="paint0_radial_n" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-16.6004 -7.10137) rotate(90) scale(27.744 45.2767)">
                                <stop offset="0.115385" stopColor="#73E1D0" />
                                <stop offset="1" stopColor="#4CA154" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    backgroundColor: '#fff',
                    padding: '0.3rem 0.3rem 0.3rem 1.7rem',
                    borderRadius: '4px',
                    pointerEvents: 'auto',
                }}
            >
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                style={{
                                    color: '#333',
                                    fontFamily: '"IBM Plex Sans", sans-serif',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0',
                                    transition: 'opacity 0.2s',
                                    verticalAlign: 'middle',
                                    textDecoration: 'none',
                                    display: 'block',
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = 0.6}
                                onMouseLeave={(e) => e.target.style.opacity = 1}
                            >
                                {link.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    style={{
                        backgroundColor: '#0A8F68',
                        color: '#fff',
                        padding: '0.72rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'background-color 0.2s',
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        border: 'none',
                        flexShrink: 0,
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#087A5A'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0A8F68'}
                >
                    Sign Up
                </button>
            </div>
        </motion.nav>
    );
}
