/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-cormorant)", "Georgia", "serif"],
                sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
            },
            colors: {
                ink: "#0f0e0d",
                cream: "#f5f0e8",
                parchment: "#ede8df",
                gold: "#c9a96e",
                "gold-light": "#e2c99a",
                "gold-dark": "#a0784a",
                muted: "#7a7060",
                seashell: "#fffae5",
            },
            backgroundImage: {
                "grain-overlay":
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
};
