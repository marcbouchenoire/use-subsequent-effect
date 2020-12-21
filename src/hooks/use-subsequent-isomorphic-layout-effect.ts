import { useEffect, useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export const useSubsequentIsomorphicLayoutEffect = createSubsequentEffect(
  useIsomorphicLayoutEffect
)
