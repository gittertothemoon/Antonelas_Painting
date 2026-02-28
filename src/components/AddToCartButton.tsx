"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "@phosphor-icons/react";
import { useCart } from "@/components/CartProvider";
import type { Artwork } from "@/lib/artworks";

export default function AddToCartButton({ artwork }: { artwork: Artwork }) {
    const { addItem, items } = useCart();
    const [justAdded, setJustAdded] = useState(false);
    const alreadyInCart = items.some((i) => i.artwork.id === artwork.id);

    const handleClick = () => {
        if (alreadyInCart) return;
        addItem(artwork);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
    };

    return (
        <button
            onClick={handleClick}
            disabled={alreadyInCart}
            className={`btn-gold w-full flex items-center justify-center gap-3 ${alreadyInCart ? "opacity-60 cursor-default" : ""
                }`}
        >
            <AnimatePresence mode="wait">
                {justAdded ? (
                    <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2"
                    >
                        <Check size={16} weight="bold" />
                        Aggiunto al carrello
                    </motion.span>
                ) : alreadyInCart ? (
                    <motion.span
                        key="inCart"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Check size={16} weight="bold" />
                        Nel carrello
                    </motion.span>
                ) : (
                    <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2"
                    >
                        <ShoppingBag size={16} weight="light" />
                        Aggiungi al carrello
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
