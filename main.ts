// Worst Superpower — one line, 46 characters, inventing the most useless
// superpower imaginable. The line is the whole entry: no code, no
// explanation. The gate wants /output/entry.txt to be UTF-8 text of
// 1 to 140 characters, not only white space.
//
// The line, written to win against the judge's published brief:
//   - genuinely useless: breathing underwater is a real power, but
//     "only in puddles" negates it completely — a puddle is the one
//     body of water nobody needs help breathing in;
//   - funny to picture: a caped hero lying face-down in a rain puddle,
//     breathing triumphantly, achieving nothing;
//   - unexpected: not slow flight, not conditional invisibility —
//     a water-breather whose whole ocean is a puddle;
//   - tight and specific: one concrete detail ("puddles") fixes the
//     power in the world; 46 characters, no wasted word;
//   - clear on a single reading, no setup beyond the sentence itself.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const POWER =
  "I can breathe underwater, but only in puddles.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, POWER, "utf8");

console.log(`wrote ${dest}/entry.txt (${POWER.length} characters)`);
