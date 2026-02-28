"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax: sfondo si muove più lentamente del testo
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[100dvh] overflow-hidden flex items-end"
        >
            {/* Background image with parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: bgY }}
            >
                {/* Desktop hero image (user provided) */}
                <div
                    className="hidden md:block w-full h-full bg-cover bg-center shadow-2xl"
                    style={{
                        backgroundImage: `url('/hero-desktop.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 30%",
                    }}
                />
                {/* Mobile hero image (user provided) */}
                <div
                    className="block md:hidden w-full h-full bg-cover bg-center shadow-xl"
                    style={{
                        backgroundImage: `url('/hero-mobile.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 30%",
                    }}
                />
                {/* Base uniform overlay for text contrast */}
                <div className="absolute inset-0 bg-ink/30" />
                {/* Overlay gradient asimmetrico sinistra → trasparente */}
                <div className="absolute inset-0 hero-overlay" />
                {/* Overlay basso per leggere il testo */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28"
                style={{ y: textY, opacity }}
            >
                {/* Main text — left aligned, asimmetrico */}
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6"
                    >
                        Opere originali
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.88] text-cream mb-8"
                    >
                        Pezzi unici
                        <br />
                        <em className="font-light italic">e originali</em>
                        <br />
                        dipinti a mano
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-lg md:text-2xl font-light italic text-cream/80 mb-12 tracking-wide max-w-xl"
                    >
                        Non realizzo riproduzioni né stampe.
                        <br />
                        Ogni opera è un pezzo unico: il tuo.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <a href="/#galleria" className="btn-gold">
                            Acquista ora
                        </a>

                        <Link
                            href="/biografia"
                            className="font-sans text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 pt-3.5 link-underline"
                        >
                            Biografia
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-cream/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ opacity }}
            >
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-4">
                    Scorri
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} weight="light" />
                </motion.div>
            </motion.div>
        </section>
    );
}
