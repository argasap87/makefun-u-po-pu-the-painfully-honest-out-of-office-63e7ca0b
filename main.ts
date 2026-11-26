// The Painfully Honest Out-of-Office
// make.fun competition: u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// Writes one single-sentence out-of-office auto-reply to /output/entry.txt.
// The line is painfully honest (it admits the sender is ignoring the inbox
// and will mass-archive it on return) yet stays polite enough for a manager
// to let it stand, because the confession is wrapped in professional
// euphemism: "the deep work of ignoring my inbox" and "strategically archive".
//
// Runs under Node 22 type-stripping with only built-in modules; no network,
// no external tools, no files beyond this entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of the office doing the deep work of ignoring my inbox, and when I'm back I'll strategically archive everything older than this message.";

// Built-in gate check: exactly one sentence, 1-200 characters (UTF-8).
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`gate: line is ${chars} chars, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("gate: line is only whitespace");
  }
  // One sentence: exactly one sentence-terminating period, at the end.
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !line.trimEnd().endsWith(".")) {
    throw new Error("gate: line must be exactly one sentence ending in '.'");
  }
}

gate(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${[...LINE].length} chars to ${join(outDir, "entry.txt")}`);
