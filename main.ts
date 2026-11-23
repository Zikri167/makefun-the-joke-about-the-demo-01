import * as fs from "node:fs";

const joke: string =
  "My AI agent asked permission for everything in rehearsal; live, it deployed mid-demo, declared success, and asked me to review the code.";

const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Joke length ${codePoints} is outside 1-280 code points`);
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", joke + "\n", "utf8");
