/**
 * One-off: crop + optimize Sean's real project photos into public/images/projects/.
 *
 * Crops are in fractions of the source so they survive re-runs at any resolution.
 * Each entry documents WHY it is cropped — mostly to remove things that undercut
 * the work (store tags still on rugs, raw untrimmed jambs, novelty wall art).
 *
 * Run: node scripts/process-photos.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { homedir } from 'node:os';

const SRC = join(homedir(), 'Downloads');
const OUT = join(process.cwd(), 'public', 'images', 'projects');

// crop: [left, top, width, height] as fractions of the source image
const photos = [
  {
    src: '1a6a45f2-a9cd-48bc-a565-a33660b52caa.jpg',
    out: 'accessible-shower-blue',
    crop: null, // clean as shot — the strongest photo of the set
  },
  {
    src: 'b878bf20-e923-41f1-97bc-ce41028a6a41.jpg',
    out: 'hex-tile-shower',
    crop: [0, 0, 0.88, 1], // trim the shower curtain intruding on the right
  },
  {
    src: '5c4aec93-0ef6-4710-a48f-a19ad6ea0f03.jpg',
    out: 'gray-bath-glass-shower',
    // drop the lower third (rugs still have store tags) and the right edge
    // (untrimmed door jamb)
    crop: [0, 0, 0.965, 0.63],
  },
  {
    src: 'b3a4f7ec-dd9e-41ff-ae62-8e923769080d.jpg',
    out: 'accessible-bath-cabinets',
    crop: [0.17, 0, 0.83, 1], // remove the novelty wall signs on the left
  },
  {
    src: '3567a0f0-2699-4264-a656-48f2d2e39b2e.jpg',
    out: 'plank-flooring-room',
    crop: [0.16, 0.12, 0.68, 0.85], // shoot past the doorframe blocking the frame
  },
  {
    src: '3cb2a72e-7a1d-431d-b1f9-a1d03232bc8f.jpg',
    out: 'cherry-kitchen-granite',
    crop: null,
  },
  {
    src: '55bb1a8f-7f84-40cf-bd58-6023eef6d5e2.jpg',
    out: 'roof-tearoff-decking',
    crop: null,
  },
  {
    src: '6ed2ff57-a6d6-4310-a864-6d920a1c481a.jpg',
    out: 'flooring-kitchen-install',
    // crop hard to the new floor: the dated cabinets above are NOT the work
    crop: [0, 0.42, 1, 0.58],
  },
];

await mkdir(OUT, { recursive: true });

for (const p of photos) {
  const input = join(SRC, p.src);
  const img = sharp(input).rotate(); // honour EXIF orientation
  const meta = await img.metadata();

  let pipeline = img;
  if (p.crop) {
    const [l, t, w, h] = p.crop;
    pipeline = pipeline.extract({
      left: Math.round(meta.width * l),
      top: Math.round(meta.height * t),
      width: Math.round(meta.width * w),
      height: Math.round(meta.height * h),
    });
  }

  pipeline = pipeline.resize({
    width: 1600,
    height: 1600,
    fit: 'inside',
    withoutEnlargement: true,
  });

  const avif = join(OUT, `${p.out}.avif`);
  await pipeline.clone().avif({ quality: 62, effort: 6 }).toFile(avif);

  const out = await sharp(avif).metadata();
  console.log(`${p.out}.avif  ${out.width}x${out.height}`);
}

console.log('\nDone.');
