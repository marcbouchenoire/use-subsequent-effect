import { createSubsequentEffectTests } from "../test"
import {
  useIsomorphicLayoutEffect,
  useSubsequentIsomorphicLayoutEffect
} from "./use-subsequent-isomorphic-layout-effect"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentIsomorphicLayoutEffect,
  useIsomorphicLayoutEffect
)
