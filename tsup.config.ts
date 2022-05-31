import { defineConfig } from "tsup";

import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig([
  // build for node
  {
    name: "node",
    entry: ["src/index.ts"],
    sourcemap: true,
    // we'll just manually "clean" the dist dir before running this (to avoid potential race conditions)
    clean: false,
    minify: true,
    platform: "node",
    replaceNodeEnv: true,
    // now required because not defaulted anymore
    shims: true,
    // use rollup for build to get smaller bundle sizes with tree shaking
    treeshake: true,
    globalName: "ThirdwebSDK",
    format: ["cjs", "esm"],
    outDir: "dist/node",
    banner: {
      js: `import "cross-fetch/dist/node-polyfill.js";`,
    },
  },
  // build for browser
  {
    name: "browser",
    entry: ["src/index.ts"],
    sourcemap: true,
    // we'll just manually "clean" the dist dir before running this (to avoid potential race conditions)
    clean: false,
    minify: true,
    platform: "browser",
    replaceNodeEnv: true,
    // now required because not defaulted anymore
    shims: true,
    // use rollup for build to get smaller bundle sizes with tree shaking
    treeshake: true,
    globalName: "ThirdwebSDK",
    format: ["cjs", "esm"],
    // contains node-only functions, aka has to be bundled in for browser
    noExternal: ["cbor"],
    esbuildPlugins: [NodeModulesPolyfillPlugin()],
    outDir: "dist/browser",
  },
  // build for script-tag usage <script src="..."></script>
  {
    name: "script",
    entry: ["src/index.ts"],
    sourcemap: true,
    // we'll just manually "clean" the dist dir before running this (to avoid potential race conditions
    clean: false,
    minify: true,
    platform: "browser",
    replaceNodeEnv: true,
    // now required because not defaulted anymore
    shims: true,
    globalName: "_thirdweb",
    format: ["iife"],
    banner: {
      js: "window.global=window;window.globalThis=window;",
    },
    // inject ThirdwebSDK into window
    footer: { js: "window.ThirdwebSDK = window._thirdweb.ThirdwebSDK;" },
    esbuildPlugins: [NodeModulesPolyfillPlugin()],
    outDir: "dist/browser",
  },
]);
