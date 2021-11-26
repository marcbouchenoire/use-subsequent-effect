import { useEffect, useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

export function createIsomorphicFunction<T>(server: T, client: T) {
  return typeof window !== "undefined" ? client : server
}

export const useIsomorphicLayoutEffect = createIsomorphicFunction(
  useEffect,
  useLayoutEffect
)

export const useSubsequentIsomorphicLayoutEffect = createSubsequentEffect(
  useIsomorphicLayoutEffect
)
