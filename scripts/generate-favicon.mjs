import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const svgPath = resolve(__dirname, "logo-source.svg");
const publicDir = resolve(root, "public");
const appDir = resolve(root, "src", "app");

mkdirSync(publicDir, { recursive: true });
mkdirSync(appDir, { recursive: true });

const svg = readFileSync(svgPath);

async function pngBuffer(size) {
    return sharp(svg, { density: 384 })
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9 })
        .toBuffer();
}

async function writePng(size, outPath) {
    const buf = await pngBuffer(size);
    writeFileSync(outPath, buf);
    console.log(`  wrote ${outPath} (${size}x${size}, ${buf.length} bytes)`);
}

console.log("Generating favicon assets from", svgPath);

await writePng(16, resolve(publicDir, "favicon-16x16.png"));
await writePng(32, resolve(publicDir, "favicon-32x32.png"));
await writePng(180, resolve(publicDir, "apple-touch-icon.png"));

const ico16 = await pngBuffer(16);
const ico32 = await pngBuffer(32);
const ico48 = await pngBuffer(48);
const icoBuffer = await pngToIco([ico16, ico32, ico48]);

writeFileSync(resolve(publicDir, "favicon.ico"), icoBuffer);
console.log(`  wrote ${resolve(publicDir, "favicon.ico")} (multi-size ICO, ${icoBuffer.length} bytes)`);

writeFileSync(resolve(appDir, "favicon.ico"), icoBuffer);
console.log(`  wrote ${resolve(appDir, "favicon.ico")} (Next.js App Router auto-detection)`);

console.log("Done.");
