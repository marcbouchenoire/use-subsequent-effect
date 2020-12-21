# use-subsequent-effect

⏭ A `use(Layout)Effect` variant hook that skips the initial render.

[![npm](https://img.shields.io/npm/v/use-subsequent-effect)](https://www.npmjs.com/package/use-subsequent-effect) ![size](https://img.shields.io/bundlephobia/minzip/use-subsequent-effect?label=size)

## Installation

#### With yarn

```sh
yarn add use-subsequent-effect
```

#### With npm

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
  /**
   * ⏭
   *
   * Skipping the initial render, only running
   * when `dependency` explicitly changes and onwards.
   * */

  return () => {
    /**
     * 🧹
     *
     * Cleaning up from the second render and onwards.
     * */
  }
}, [dependency])
```

## ESLint

If you are using [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), there's no need to specify a custom `additionalHooks` list. The `react-hooks/exhaustive-deps` rule already works out-of-the-box on all effect hooks (`/Effect($|[^a-z])/g`).

## License

`use-subsequent-effect` is released under the [MIT](https://github.com/bouchenoiremarc/use-subsequent-effect/blob/main/LICENSE) license.
