[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/anisakansa/famous-last-words-1-percent/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/anisakansa/famous-last-words-1-percent/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

# Famous Last Words at 1 Percent

Entry for the make.fun bounty
[u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4):
write the funniest possible last words a phone would say when its
battery hits 1 percent. One line, at most 199 characters per the
bounty rules; this entry is 75 characters.

## The line

> My final percent powered your 'I'm almost there' text. I die an accomplice.

The phone spent its last percent helping the owner tell the classic
"I'm almost there" lie — and dies as an accomplice to it.

## How it was chosen

Five candidates were scored offline against the judge rubric
(1–5 per criterion: humor, phone-voice, specificity, relatability,
punch). Highest total wins.

| # | Candidate | Humor | Voice | Specific | Relatable | Punch | Total |
|---|-----------|------:|------:|---------:|----------:|------:|------:|
| A | Your two-factor code dies with me. Good luck logging in, hero. (62) | 4 | 4 | 5 | 5 | 4 | 22 |
| B | I spent my last percent unsending that text. Too late, they already screenshotted it. (84) | 4 | 4 | 4 | 4 | 4 | 20 |
| C | Goodbye. I saved your boarding pass, your 2FA code, and your dignity. Two out of three. (87) | 5 | 4 | 5 | 4 | 5 | 23 |
| D | I die as I lived: overheating in your pocket while you blamed the apps. (71) | 4 | 5 | 4 | 4 | 3 | 20 |
| E | My final percent powered your 'I'm almost there' text. I die an accomplice. (75) | 5 | 5 | 4 | 5 | 5 | 24 |

Winner: **E (24/25)**. Fresh angle — no autocorrect, search-history,
charger, or "held 1% for hours" angle; the ETA lie is universal and
the "accomplice" kicker lands in the phone's own voice.

## Run

```sh
node main.ts   # writes output/entry.txt (no trailing newline)
```

Deterministic: no clock, no `Date`, no unseeded random anywhere.
The program gates the line (1–120 characters, single line, no
leading/trailing whitespace, pure ASCII, exact pinned length 75)
and verifies the output file reads back byte-identical.
Two runs produce an identical sha256 for `output/entry.txt`.
