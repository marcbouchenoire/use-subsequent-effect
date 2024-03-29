# use-subsequent-effect

⏭ A `use(Layout)Effect` variant hook that skips the initial render.

[![build](https://img.shields.io/github/actions/workflow/status/marcbouchenoire/use-subsequent-effect/.github/workflows/ci.yml)](https://github.com/marcbouchenoire/use-subsequent-effect/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/use-subsequent-effect?color=%230cf)](https://www.npmjs.com/package/use-subsequent-effect)
[![size](https://img.shields.io/bundlephobia/minzip/use-subsequent-effect?label=size&color=%2385f)](https://bundlephobia.com/package/use-subsequent-effect)
[![coverage](https://img.shields.io/codecov/c/github/marcbouchenoire/use-subsequent-effect?color=%23e4b)](https://codecov.io/gh/marcbouchenoire/use-subsequent-effect)
[![license](https://img.shields.io/github/license/marcbouchenoire/use-subsequent-effect?color=%23f81)](https://github.com/marcbouchenoire/use-subsequent-effect/blob/main/LICENSE)

- 📚 **Simple**: A drop-in `use(Layout)Effect` replacement
- 🗜️ **Tiny**: Tree-shakeable and around **300 bytes** on modern platforms
- 🧪 **Reliable**: Fully tested with [100% code coverage](https://codecov.io/gh/marcbouchenoire/use-subsequent-effect)
- 📦 **Typed**: Written in [TypeScript](https://www.typescriptlang.org/) and includes definitions out-of-the-box
- 💨 **Zero dependencies**

## Installation

```bash
npm install use-subsequent-effect
```

## Usage

Import `useSubsequentEffect`, `useSubsequentLayoutEffect` or `useSubsequentIsomorphicLayoutEffect`.

```typescript
import { useSubsequentEffect } from "use-subsequent-effect"
```

Use it as a drop-in `use(Layout)Effect` replacement.

```typescript
useSubsequentEffect(() => {
  dependency.update()

  return () => {
    dependency.clean()
  }
}, [dependency])
```

### ESLint

If you are using [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), there's no need to specify a custom `additionalHooks` list. The `react-hooks/exhaustive-deps` rule already works out-of-the-box on all effect hooks (`/Effect($|[^a-z])/g`).
