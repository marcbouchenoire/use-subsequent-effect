/* eslint-disable jest/no-export, jest/valid-title */
import { renderHook } from "@testing-library/react-hooks"
import { useEffectType } from "../src/types"

export function createSubsequentEffectTests(
  name: string,
  useSubsequentEffect: useEffectType,
  useEffect: useEffectType
) {
  describe(name, () => {
    test("should skip the initial render", () => {
      let subsequentRenders = 0
      let renders = 0

      const { rerender, unmount } = renderHook(() => {
        useSubsequentEffect(() => {
          subsequentRenders += 1
        })

        useEffect(() => {
          renders += 1
        })
      })

      rerender()

      unmount()

      expect(subsequentRenders).toBe(renders - 1)
    })

    test("should run a given cleanup function accordingly", () => {
      let subsequentCleanups = 0
      let cleanups = 0

      const { rerender, unmount } = renderHook(() => {
        useSubsequentEffect(() => {
          return () => {
            subsequentCleanups += 1
          }
        })

        useEffect(() => () => {
          cleanups += 1
        })
      })

      rerender()

      unmount()

      expect(subsequentCleanups).toBe(cleanups - 1)
    })

    test("should never run with an empty dependencies array", () => {
      let subsequentRenders = 0

      const { rerender, unmount } = renderHook(() => {
        useSubsequentEffect(() => {
          subsequentRenders += 1
        }, [])
      })

      rerender()

      unmount()

      expect(subsequentRenders).toBe(0)
    })
  })
}
