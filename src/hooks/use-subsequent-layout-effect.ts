import { useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

/**
 * Run a layout effect only on subsequent renders.
 *
 * @param effect - A function that can return a cleanup function.
 * @param [dependencies] - If present, the effect will only activate if the values in the list change.
 *
 * @example
 *
 * ```js
 * useSubsequentLayoutEffect(() => {
 *   dependency.update()
 *
 *   return () => {
 *     dependency.clean()
 *   }
 * }, [dependency])
 * ```
 */
export const useSubsequentLayoutEffect = createSubsequentEffect(useLayoutEffect)
