import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Biografia — Antonela Maliqi",
    description:
        "Antonela Maliqi, artista autodidatta italiana. Opere originali dipinte a mano con acrilici.",
};

export default function BiografiaPage() {
    return (
        <main className="min-h-[100dvh] pt-32 pb-24">
            <div className="max-w-2xl mx-auto px-6 md:px-12">
                {/* Back link */}
                <a
                    href="/"
                    className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300 mb-16 link-underline"
                >
                    &larr; Torna alla galleria
                </a>

                {/* Biography text — serif classico, sottile, piccolo */}
                <article className="font-serif text-[1.0625rem] leading-[1.9] font-bold text-ink/80 tracking-wide drop-shadow-md">
                    <p className="mb-8">
                        Mi chiamo Antonela Maliqi, vivo in Italia e ho 25 anni.
                        L&rsquo;arte fa parte della mia vita da quando ero bambina: è sempre stata
                        il mio modo più autentico di esprimermi e di sentirmi libera. Ho iniziato
                        disegnando a matita, per poi lasciarmi conquistare nel tempo dal mondo degli
                        acrilici, che oggi rappresentano il mio mezzo principale.
                    </p>

                    <p className="mb-8">
                        Dipingo ciò che sento, senza impormi regole, stili o categorie precise.
                        Ogni quadro nasce da un&rsquo;emozione, da un&rsquo;idea improvvisa o semplicemente
                        da ciò che mi va di raccontare in quel momento. Non seguo uno schema fisso,
                        perché credo che la libertà creativa sia la parte più vera del mio lavoro.
                    </p>

                    <p className="mb-8">
                        Sono un&rsquo;artista autodidatta: non ho mai studiato arte in modo accademico,
                        tutto ciò che so nasce dalla passione, dalla sperimentazione e dal desiderio
                        continuo di creare.
                    </p>

                    <p>
                        Mi piace pensare che la gioia che provo mentre dipingo possa arrivare anche
                        a chi sceglie di accogliere una mia opera nella propria casa, nel proprio
                        spazio o semplicemente nella propria quotidianità.
                    </p>
                </article>

                {/* Thin golden separator */}
                <div className="mt-16 h-px bg-gradient-to-r from-gold/40 to-transparent" />

                <p className="mt-8 font-sans text-xs tracking-[0.2em] uppercase text-muted/60">
                    Antonela Maliqi — Italia
                </p>
            </div>
        </main>
    );
}
