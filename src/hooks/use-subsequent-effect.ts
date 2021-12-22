import { useEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

/**
 * Run an effect only on subsequent renders.
 *
 * @param effect - An function that can return a cleanup function.
 * @param [dependencies] - If present, the effect will only activate if the values in the list change.
 *
 * @example
 *
 * ```js
 * useSubsequentEffect(() => {
 *   dependency.update()
 *
 *   return () => {
 *     dependency.clean()
 *   }
 * }, [dependency])
 * ```
 */
export const useSubsequentEffect = createSubsequentEffect(useEffect)
