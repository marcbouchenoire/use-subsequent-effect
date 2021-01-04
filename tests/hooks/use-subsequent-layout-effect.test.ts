import { useLayoutEffect } from "react"
import { useSubsequentLayoutEffect } from "../../src/hooks/use-subsequent-layout-effect"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentLayoutEffect,
  useLayoutEffect
)
