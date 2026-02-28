"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Artwork } from "@/lib/artworks";

interface ArtworkCardProps {
    artwork: Artwork;
    index: number;
}

export default function ArtworkCard({ artwork, index }: ArtworkCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <Link href={`/opere/${artwork.id}`} className="block group">
                {/* Image container */}
                <div className="gallery-card bg-parchment rounded-[1rem] artwork-shadow overflow-hidden">
                    <div className="relative w-full aspect-[3/4]">
                        <Image
                            src={artwork.image}
                            alt={artwork.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-[1rem]"
                        />

                        {/* Hover overlay */}
                        <motion.div
                            className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500 flex items-center justify-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-xs tracking-[0.2em] uppercase text-cream border border-cream/50 px-5 py-2.5"
                            >
                                Scopri
                            </motion.span>
                        </motion.div>
                    </div>
                </div>

                {/* Info below image */}
                <div className="mt-4 px-1">
                    <div className="flex justify-between items-baseline gap-4">
                        <h3 className="font-serif text-lg font-medium tracking-tight text-ink group-hover:text-gold transition-colors duration-300 truncate">
                            {artwork.title}
                        </h3>
                        <p className="font-sans text-[10px] font-medium text-ink shrink-0">
                            €{artwork.price}
                        </p>
                    </div>
                    <p className="font-sans text-[10px] text-muted mt-0.5 tracking-wide">
                        {artwork.year} &mdash; {artwork.dimensions}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
