import { useEffect } from "react"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"
import { useSubsequentEffect } from "../../src/hooks/use-subsequent-effect"

createSubsequentEffectTests(
  "useSubsequentEffect",
  useSubsequentEffect,
  useEffect
)
