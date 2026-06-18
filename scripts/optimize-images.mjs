#!/usr/bin/env node
/**
 * Optimize project screenshots → WebP.
 *
 * Walks src/assets/ (skipping the stack/ tech-icon set), converts every
 * PNG/JPG to a same-named .webp (1.png → 1.webp), and removes the original
 * once the WebP is written. Large shots are downscaled to MAX_WIDTH so a
 * portfolio card/gallery never ships a 4000px full-page capture.
 *
 * Idempotent: a file that's already .webp (original gone) is skipped.
 *
 * Requires the `cwebp` and `magick` (ImageMagick) CLIs — both from Homebrew.
 *   brew install webp imagemagick
 *
 * Usage:  npm run optimize:images
 *         npm run optimize:images -- --quality 82 --max-width 1800 --keep
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, existsSync, rmSync } from "node:fs";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath as toPath } from "node:url";

const ROOT = dirname(dirname(toPath(import.meta.url)));
const ASSETS = join(ROOT, "src", "assets");

// --- options ----------------------------------------------------------------
const argv = process.argv.slice(2);
const opt = (flag, def) => {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : def;
};
const QUALITY = Number(opt("--quality", "80"));
const MAX_WIDTH = Number(opt("--max-width", "1600"));
const KEEP = argv.includes("--keep"); // keep originals (don't delete)
const SKIP_DIRS = new Set(["stack"]);
const SRC_EXT = new Set([".png", ".jpg", ".jpeg"]);

// --- helpers ----------------------------------------------------------------
const has = (bin) => {
  try { execFileSync("which", [bin], { stdio: "ignore" }); return true; }
  catch { return false; }
};
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2) + " MB";
const sizeOf = (p) => statSync(p).size;

function widthOf(file) {
  try {
    return Number(execFileSync("magick", ["identify", "-format", "%w", file]).toString().trim());
  } catch {
    return 0; // unknown → don't resize
  }
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(join(dir, entry.name));
    } else {
      yield join(dir, entry.name);
    }
  }
}

// --- run --------------------------------------------------------------------
if (!has("cwebp")) {
  console.error("✗ `cwebp` not found. Install with:  brew install webp");
  process.exit(1);
}
if (!has("magick")) {
  console.error("✗ `magick` not found. Install with:  brew install imagemagick");
  process.exit(1);
}

let converted = 0, skipped = 0, before = 0, after = 0;

for (const file of walk(ASSETS)) {
  const ext = extname(file).toLowerCase();
  if (!SRC_EXT.has(ext)) continue;

  const target = join(dirname(file), basename(file, ext) + ".webp");
  if (existsSync(target)) { skipped++; continue; } // already done

  const srcBytes = sizeOf(file);
  const w = widthOf(file);
  const args = ["-q", String(QUALITY), "-m", "6", "-mt"];
  if (w > MAX_WIDTH) args.push("-resize", String(MAX_WIDTH), "0");
  args.push(file, "-o", target);

  try {
    execFileSync("cwebp", args, { stdio: "ignore" });
  } catch (e) {
    console.error(`✗ failed: ${file}`);
    continue;
  }

  const dstBytes = sizeOf(target);
  before += srcBytes;
  after += dstBytes;
  converted++;
  const pct = (100 * (1 - dstBytes / srcBytes)).toFixed(0);
  const rel = file.slice(ASSETS.length + 1);
  console.log(`✓ ${rel}  ${mb(srcBytes)} → ${mb(dstBytes)}  (-${pct}%)`);

  if (!KEEP) rmSync(file);
}

console.log("\n" + "─".repeat(48));
console.log(`Converted: ${converted}   Skipped (already webp): ${skipped}`);
if (converted) {
  console.log(`Total:     ${mb(before)} → ${mb(after)}  (-${(100 * (1 - after / before)).toFixed(0)}%)`);
}
if (KEEP) console.log("Originals kept (--keep). Remove them once you've verified the WebP output.");
