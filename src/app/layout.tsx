import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Arte Originale — Pezzi Unici Dipinti a Mano",
    description:
        "Opere d'arte originali dipinte a mano. Non realizzo riproduzioni né stampe. Ogni opera è un pezzo unico, il tuo.",
    openGraph: {
        title: "Arte Originale — Pezzi Unici Dipinti a Mano",
        description:
            "Scopri la galleria di opere originali. Ogni dipinto è un pezzo unico irripetibile.",
        type: "website",
        locale: "it_IT",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it" className={`${cormorant.variable} ${outfit.variable}`}>
            <body className="bg-cream text-ink antialiased">
                <CartProvider>
                    <Navbar />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
