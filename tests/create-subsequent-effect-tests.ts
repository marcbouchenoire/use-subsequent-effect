import { renderHook } from "@testing-library/react-hooks"
import * as assert from "uvu/assert"
import { useEffectType } from "../src/types"
import { describe } from "./helpers"

export function createSubsequentEffectTests(
  name: string,
  useSubsequentEffect: useEffectType,
  useEffect: useEffectType
) {
  describe(name, (it) => {
    it("should skip the initial render", () => {
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

      assert.equal(subsequentRenders, renders - 1)
    })

    it("should run a given cleanup function accordingly", () => {
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

      assert.equal(subsequentCleanups, cleanups - 1)
    })

    it("should never run with an empty dependencies array", () => {
      let subsequentRenders = 0

      const { rerender, unmount } = renderHook(() => {
        useSubsequentEffect(() => {
          subsequentRenders += 1
        }, [])
      })

      rerender()

      unmount()

      assert.equal(subsequentRenders, 0)
    })
  })
}
