import { build } from "esbuild";
import npmDts from 'npm-dts';
const { Generator } = npmDts;

(async () => {
  await generateDeclarationFile();
  await buildCjsBundle();
  await buildEsmBundle();
})();

async function generateDeclarationFile() {
  new Generator({
    entry: 'src/index.ts',
    output: 'dist/index.d.ts',
  }).generate();
}

async function buildCjsBundle() {
  const sharedConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    platform: 'node', // for CJS
    outfile: "dist/index.js",
  };

  await build(sharedConfig);
}

async function buildEsmBundle() {
  const sharedConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    platform: 'neutral', // for ESM
    format: "esm",
    outfile: "dist/index.esm.js",
  };

  await build(sharedConfig);
}

