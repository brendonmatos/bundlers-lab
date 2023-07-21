# Bundlers Lab

## Objectives

1. Understand how to use bundlers to manage dependencies
2. Learn how to use Nx to manage a monorepo
3. Study problems of building ESM and CJS packages
4. Verify logic behind the bundlers and how they work. Do they ignore transform on already transformed files? Do they ignore external dependencies?

## Project Structure

- `apps/`: contains the applications
- `apps/calculator`: contains the calculator application
- `apps/calculator/vite.config.ts`: basic configuration for Vite just to use Vitest
- `packages/`: contains the packages
- `packages/math`: contains the math package
- `packages/physics-esbuild`: contains the physics package built with esbuild
- `packages/statistics-babel`: contains the statistics package built with babel

## Issues

### 1. ESM should have .mjs extension

#### Scenario:

### 2. Don't mix ESM and CJS

#### Scenario:

- `packages/math/dist/index.mjs`: built with esbuild, format: ESM
- `packages/physics-esbuild/dist/index.js`: built with esbuild, format: CJS, marking `@builder/math` as external
- `apps/calculator/src/index.ts`: importing `@builder/physics-esbuild`
- `apps/calculator/src/index.test.ts`: being run by Vitest

```
 FAIL  src/index.test.ts [ src/index.test.ts ]
       Error: require() of ES Module /Users/brendonferreira/Projects/brendon/bundlers-lab/packages/math/dist/index.mjs not supported.
       Instead change the require of /Users/brendonferreira/Projects/brendon/bundlers-lab/packages/math/dist/index.mjs to a dynamic import() which is available in all CommonJS modules.
        ❯ ../../packages/physics-esbuild/dist/index.js:27:19
            25| 
            26| // src/force.ts
            27| var import_math = require("@bundlers/math");
              |                   ^
            28| var calculateForce = (mass, acceleration) => {
            29|   return (0, import_math.multiply)(mass, acceleration);
        ❯ async /Users/brendonferreira/Projects/brendon/bundlers-lab/apps/calculator/src/index.ts:2:31
        ❯ async /Users/brendonferreira/Projects/brendon/bundlers-lab/apps/calculator/src/index.test.ts:1:31
```


### 3. Let's add require, module to the package.json maybe?



```
{
  "name":  "@bundlers/math",
  "scripts": {
    "build:esm": "npx esbuild ./src/index.ts --bundle --format=esm --outfile=dist/index.mjs",
    "build:cjs": "npx esbuild ./src/index.ts --bundle --format=cjs --outfile=dist/index.cjs",
    "build:iife": "npx esbuild ./src/index.ts --bundle --format=iife --outfile=dist/index.js",
    "build": "npm run build:esm && npm run build:cjs"
  },
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts"
}
```

Ok!! That worked! 

```
➜ nr test-repo

> bundlers-lab@1.0.0 test-repo
> nx run-many --target=test --all

 
    ✔  nx run @bundlers/math:build  [existing outputs match the cache, left as is]
    ✔  nx run @bundlers/physics-esbuild:build  [existing outputs match the cache, left as is]
    ✔  nx run @bundlers/statistics-babel:build  [existing outputs match the cache, left as is]
    ✔  nx run @bundlers/physics-esbuild:test  [existing outputs match the cache, left as is]
    ✔  nx run @bundlers/statistics-babel:test  [existing outputs match the cache, left as is]
    ✔  nx run @bundlers/calculator:build (598ms)
    ✔  nx run @bundlers/calculator:test (755ms)

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target test for 3 projects and 4 tasks they depend on (1s)
 
   Nx read the output from the cache instead of running the command for 5 out of 7 tasks.
```
