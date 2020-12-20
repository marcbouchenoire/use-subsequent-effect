import { useEffect } from "react"
import { createSubsequentEffectTests } from "../test"
import { useSubsequentEffect } from "./use-subsequent-effect"

createSubsequentEffectTests(
  "useSubsequentEffect",
  useSubsequentEffect,
  useEffect
)
