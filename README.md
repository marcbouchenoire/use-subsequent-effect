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

Import `useSubsequentEffect` or `useSubsequentLayoutEffect`.

```tsx
import { useSubsequentEffect } from "use-subsequent-effect"
```

Use it as a drop-in `use(Layout)Effect` replacement.

```tsx
useSubsequentEffect(() => {
  console.log("foo")

  return () => {
    console.log("bar")
  }
}, [baz])
```

## License

`use-subsequent-effect` is released under the [MIT](https://github.com/bouchenoiremarc/use-subsequent-effect/blob/main/LICENSE) license.
