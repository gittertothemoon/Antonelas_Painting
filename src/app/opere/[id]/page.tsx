import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArtwork } from "@/lib/artworks";
import ArtworkDetail from "@/components/ArtworkDetail";

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const artwork = getArtwork(params.id);
    if (!artwork) return { title: "Opera non trovata" };
    return {
        title: `${artwork.title} (${artwork.year}) — Arte Originale`,
        description: artwork.description,
    };
}

export default function ArtworkDetailPage({ params }: Props) {
    const artwork = getArtwork(params.id);
    if (!artwork) notFound();

    return (
        <main className="min-h-[100dvh] pt-24 pb-24">
            <ArtworkDetail artwork={artwork} />
        </main>
    );
}
