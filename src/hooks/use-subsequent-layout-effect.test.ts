import { useLayoutEffect } from "react"
import { createSubsequentEffectTests } from "../test"
import { useSubsequentLayoutEffect } from "./use-subsequent-layout-effect"

createSubsequentEffectTests(
  "useSubsequentLayoutEffect",
  useSubsequentLayoutEffect,
  useLayoutEffect
)
