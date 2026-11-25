import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent — one-line entry.
// Winner of a 5-candidate offline rubric round (see README.md).
// The phone confesses it spent its last percent powering the
// owner's classic "I'm almost there" lie. It dies an accomplice.
const LINE =
  "My final percent powered your 'I'm almost there' text. I die an accomplice.";

// Exact pinned length of the winning line (75 characters).
const EXPECTED_LENGTH = 75;
const MAX_LENGTH = 120;

function fail(message: string): never {
  throw new Error(message);
}

// Deterministic gates only: no clock, no Date, no unseeded random.
if (LINE.length < 1 || LINE.length > MAX_LENGTH) {
  fail(`line length ${LINE.length} outside 1-${MAX_LENGTH}`);
}
if (LINE.length !== EXPECTED_LENGTH) {
  fail(`line length ${LINE.length} != pinned ${EXPECTED_LENGTH}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}
if (LINE !== LINE.trim()) {
  fail("line must not have leading or trailing whitespace");
}
if (LINE.includes("  ")) {
  fail("line must not contain double spaces");
}
if (!/^[\x20-\x7E]+$/.test(LINE)) {
  fail("line must be pure ASCII");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");

// Round-trip check: the file must read back byte-identical.
const roundTrip = readFileSync("output/entry.txt", "utf8");
if (roundTrip !== LINE) {
  fail("round-trip mismatch for output/entry.txt");
}

console.log(`entry written: ${LINE.length} characters`);
