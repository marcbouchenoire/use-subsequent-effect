# use-subsequent-effect

⏭ A `use(Layout)Effect` variant hook that skips the initial render.

[![build](https://github.com/bouchenoiremarc/use-subsequent-effect/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bouchenoiremarc/use-subsequent-effect/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/use-subsequent-effect?color=%230cf)](https://www.npmjs.com/package/use-subsequent-effect) [![gzipped](https://img.shields.io/bundlephobia/minzip/use-subsequent-effect?label=gzipped&color=%2385f)](https://www.npmjs.com/package/use-subsequent-effect) [![license](https://img.shields.io/github/license/bouchenoiremarc/use-subsequent-effect?color=%23e4b)](https://github.com/bouchenoiremarc/use-subsequent-effect/blob/main/LICENSE)

## Installation

#### Skypack

```html
<script type="module">
  import { useSubsequentEffect } from "https://cdn.skypack.dev/use-subsequent-effect"
</script>
```

#### Yarn

```sh
yarn add use-subsequent-effect
```

#### npm

```sh
npm install use-subsequent-effect
```

## Usage

Import `useSubsequentEffect`, `useSubsequentLayoutEffect` or `useSubsequentIsomorphicLayoutEffect`.

```tsx
import { useSubsequentEffect } from "use-subsequent-effect"
```

Use it as a drop-in `use(Layout)Effect` replacement.

```tsx
useSubsequentEffect(() => {
  dependency.update()

  return () => {
    dependency.clean()
  }
}, [dependency])
```

### ESLint

If you are using [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), there's no need to specify a custom `additionalHooks` list. The `react-hooks/exhaustive-deps` rule already works out-of-the-box on all effect hooks (`/Effect($|[^a-z])/g`).
