import type { DependencyList, EffectCallback } from "react"
import { useRef } from "react"
import type { useEffectType } from "../types"

/**
 * Create a subsequent effect hook from a given effect hook.
 *
 * @param useEffect - The effect hook to extend.
 */
export function createSubsequentEffect(useEffect: useEffectType) {
  return (effect: EffectCallback, dependencies?: DependencyList) => {
    const isSubsequent = useRef(false)

    useEffect((...args) => {
      if (isSubsequent.current) {
        return effect(...args)
      } else {
        isSubsequent.current = true
      }
    }, dependencies) // eslint-disable-line react-hooks/exhaustive-deps
  }
}
