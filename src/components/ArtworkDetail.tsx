"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Artwork } from "@/lib/artworks";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

interface ArtworkDetailProps {
    artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Back */}
            <Link
                href="/#galleria"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-12 link-underline"
            >
                &larr; Galleria
            </Link>

            {/* Main layout: image left, info right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/5] md:aspect-[3/4] artwork-float overflow-hidden"
                >
                    <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        priority
                        className="object-cover rounded-[2rem]"
                    />
                </motion.div>

                {/* Info panel */}
                <div className="lg:col-span-1 lg:pt-16 flex flex-col">
                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink mb-3">
                        {artwork.title}
                    </h1>

                    {/* Technical info — thin, light */}
                    <div className="font-serif text-sm font-light text-muted leading-relaxed mb-6 space-y-1">
                        <p>{artwork.year}</p>
                        <p>{artwork.dimensions}</p>
                        <p>{artwork.materials}</p>
                        <p>{artwork.canvasType}</p>
                    </div>

                    <div className="mb-8">
                        <p className="font-sans text-lg font-medium text-ink">
                            €{artwork.price}
                        </p>
                    </div>

                    {/* Separator */}
                    <div className="h-px bg-gradient-to-r from-gold/30 to-transparent mb-8" />

                    {/* Description */}
                    <p className="font-serif text-base font-light text-ink/70 leading-[1.85] mb-12">
                        {artwork.description}
                    </p>

                    {/* Unique piece disclaimer */}
                    <p className="font-sans text-xs tracking-widest uppercase text-gold/80 mb-6">
                        Opera unica — nessuna riproduzione
                    </p>

                    {/* Add to cart */}
                    <AddToCartButton artwork={artwork} />

                    {/* Contact note */}
                    <p className="font-serif italic text-xs text-muted/70 mt-5 leading-relaxed">
                        Per informazioni su spedizione e prezzi,
                        <br />
                        scrivi a{" "}
                        <span className="text-gold">info@artista.it</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
