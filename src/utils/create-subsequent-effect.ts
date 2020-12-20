import {
  EffectCallback,
  DependencyList,
  useEffect as useDefaultEffect,
  useLayoutEffect,
  useRef
} from "react"

export const createSubsequentEffect = (
  useEffect: typeof useDefaultEffect | typeof useLayoutEffect
) => {
  return (effect: EffectCallback, deps?: DependencyList): void => {
    const isSubsequent = useRef(false)

    useEffect((...args) => {
      if (isSubsequent.current) {
        return effect(...args)
      } else {
        isSubsequent.current = true
      }
    }, deps)
  }
}
