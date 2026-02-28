import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arte Originale — Pezzi Unici Dipinti a Mano",
    description: "Scopri la collezione di opere d'arte originali e pezzi unici dipinti a mano da Antonela Maliqi. Nessuna stampa, nessuna riproduzione.",
};

export default function HomePage() {
    return (
        <main className="grain-overlay">
            <Hero />
            <Gallery />

            {/* Footer */}
            <footer className="bg-ink text-cream/40 py-12">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-serif italic text-sm">
                        Ogni opera è un pezzo unico, dipinto a mano.
                    </p>
                    <p className="font-sans text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} — Tutti i diritti riservati
                    </p>
                </div>
            </footer>
        </main>
    );
}
