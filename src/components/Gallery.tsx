"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { artworks } from "@/lib/artworks";
import ArtworkCard from "./ArtworkCard";

export default function Gallery() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

    return (
        <section id="galleria" className="py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section header */}
                <motion.div
                    ref={headingRef}
                    initial={{ opacity: 0, y: 32 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 md:mb-28"
                >
                    {/* Eyebrow */}
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        Collezione
                    </p>

                    {/* Asymmetric heading layout */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-ink">
                            Galleria
                            <br />
                            <em className="text-muted font-light">d&rsquo;Arte</em>
                        </h2>
                        <p className="font-sans text-sm text-muted max-w-sm leading-relaxed md:text-right">
                            Ogni opera nasce da un gesto irripetibile.
                            <br />
                            Nessuna stampa, nessuna replica.
                        </p>
                    </div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={headingInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
                    />
                </motion.div>

                {/* Grid layout — 3 colonne su desktop, 2 su mobile */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                    {artworks.map((artwork, index) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
                    ))}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-serif italic text-sm text-muted text-center mt-24"
                >
                    Le opere esposte sono pezzi unici. Una volta venduta, un&rsquo;opera lascia la galleria per sempre.
                </motion.p>
            </div>
        </section>
    );
}
