import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"
import {
  useIsomorphicLayoutEffect,
  useSubsequentIsomorphicLayoutEffect
} from "../../src/hooks/use-subsequent-isomorphic-layout-effect"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentIsomorphicLayoutEffect,
  useIsomorphicLayoutEffect
)
