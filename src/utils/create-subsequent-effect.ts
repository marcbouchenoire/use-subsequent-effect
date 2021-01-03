import { EffectCallback, DependencyList, useRef } from "react"
import { useEffectType } from "../types"

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
