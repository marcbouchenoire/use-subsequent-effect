import { useEffect } from "react"
import { useSubsequentEffect } from "../../src/hooks/use-subsequent-effect"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"

createSubsequentEffectTests(
  "useSubsequentEffect",
  useSubsequentEffect,
  useEffect
)
