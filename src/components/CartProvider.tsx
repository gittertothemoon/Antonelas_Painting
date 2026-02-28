"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Artwork } from "@/lib/artworks";

interface CartItem {
    artwork: Artwork;
    quantity: number;
}

interface CartContextValue {
    items: CartItem[];
    addItem: (artwork: Artwork) => void;
    removeItem: (id: string) => void;
    total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = useCallback((artwork: Artwork) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.artwork.id === artwork.id);
            if (existing) return prev;
            return [...prev, { artwork, quantity: 1 }];
        });
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((i) => i.artwork.id !== id));
    }, []);

    const total = items.length;

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, total }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be inside CartProvider");
    return ctx;
}
