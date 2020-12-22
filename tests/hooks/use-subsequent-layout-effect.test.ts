import { useLayoutEffect } from "react"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"
import { useSubsequentLayoutEffect } from "../../src/hooks/use-subsequent-layout-effect"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentLayoutEffect,
  useLayoutEffect
)
