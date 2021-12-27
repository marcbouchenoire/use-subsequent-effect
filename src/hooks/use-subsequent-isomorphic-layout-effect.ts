import { useEffect, useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

/**
 * Create a different value depending on if it's executed on the server or the client.
 *
 * @param server - The value on the server.
 * @param client - The value on the client.
 */
export function createIsomorphicFunction<T>(server: T, client: T) {
  return typeof window !== "undefined" ? client : server
}

export const useIsomorphicLayoutEffect = createIsomorphicFunction(
  useEffect,
  useLayoutEffect
)

/**
 * Run an isomorphic layout effect only on subsequent renders.
 *
 * @param effect - A function that can return a cleanup function.
 * @param [dependencies] - If present, the effect will only activate if the values in the list change.
 *
 * @example
 *
 * ```js
 * useSubsequentIsomorphicLayoutEffect(() => {
 *   dependency.update()
 *
 *   return () => {
 *     dependency.clean()
 *   }
 * }, [dependency])
 * ```
 */
export const useSubsequentIsomorphicLayoutEffect = createSubsequentEffect(
  useIsomorphicLayoutEffect
)
