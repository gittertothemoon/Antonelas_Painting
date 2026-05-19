export interface Artwork {
    id: string;
    title: string;
    year: number;
    dimensions: string;
    materials: string;
    canvasType: string;
    description: string;
    image: string;
    price: number;
    category?: string;
}

export const artworks: Artwork[] = [
    {
        id: "un-ingresso-in-sicilia",
        title: "Un ingresso in Sicilia",
        year: 2024,
        dimensions: "60 × 80 cm",
        materials: "Acrilico su tela",
        canvasType: "Tela di cotone",
        description:
            "Un'opera che trasporta l'osservatore direttamente nell'essenza della Sicilia. La luce e i colori catturano un momento di bellezza mediterranea sospesa nel tempo.",
        image: "/opere/un-ingresso-in-sicilia.png",
        price: 850,
    },
    {
        id: "varco-di-primavera",
        title: "Varco di primavera",
        year: 2024,
        dimensions: "70 × 90 cm",
        materials: "Acrilico su tela",
        canvasType: "Tela di lino",
        description:
            "Il passaggio stagionale reso attraverso pennellate dinamiche. Una soglia cromatica che annuncia la rinascita e l'esplosione della vita primaverile.",
        image: "/opere/varco-di-primavera.png",
        price: 980,
    },
];

export function getArtwork(id: string): Artwork | undefined {
    return artworks.find((a) => a.id === id);
}
