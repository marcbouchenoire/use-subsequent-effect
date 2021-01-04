import {
  useIsomorphicLayoutEffect,
  useSubsequentIsomorphicLayoutEffect
} from "../../src/hooks/use-subsequent-isomorphic-layout-effect"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentIsomorphicLayoutEffect,
  useIsomorphicLayoutEffect
)
