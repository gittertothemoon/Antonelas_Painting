"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "./CartProvider";

export default function Navbar() {
    const cart = useCart();
    const items = cart ? cart.items : [];
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isHome = pathname === "/";

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        [
            isHome ? "rgba(15, 14, 13, 0)" : "rgba(15, 14, 13, 0.9)",
            "rgba(15, 14, 13, 0.9)"
        ]
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 100],
        [
            isHome ? "blur(0px)" : "blur(12px)",
            "blur(12px)"
        ]
    );

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 transition-all duration-500"
            style={{
                backgroundColor: backgroundColor,
                backdropFilter: backdropFilter,
                WebkitBackdropFilter: backdropFilter
            } as any}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
                <Link href="/" className="font-serif text-2xl tracking-tight text-white drop-shadow-sm group uppercase font-bold">
                    Antonela <span className="opacity-80 group-hover:opacity-100 transition-opacity">Maliqi</span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <a href="/#galleria" className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
                        Galleria
                    </a>
                    <Link href="/biografia" className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
                        Biografia
                    </Link>

                    <button className="relative text-white/70 hover:text-white transition-colors ml-4">
                        <ShoppingBag size={22} weight="light" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-[10px] font-sans font-bold text-ink">
                                {items.length}
                            </span>
                        )}
                    </button>
                </nav>

                <div className="md:hidden flex items-center">
                    <button className="relative text-white/70 hover:text-white transition-colors">
                        <ShoppingBag size={22} weight="light" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-[10px] font-sans font-bold text-ink">
                                {items.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
