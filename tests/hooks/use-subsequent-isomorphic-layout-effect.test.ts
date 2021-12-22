import { renderHook } from "@testing-library/react-hooks/server"
import { restoreAll, spyOn } from "nanospy"
import { useEffect, useLayoutEffect } from "react"
import * as assert from "uvu/assert"
import { useSubsequentLayoutEffect } from "../../src"
import {
  createIsomorphicFunction,
  useIsomorphicLayoutEffect,
  useSubsequentIsomorphicLayoutEffect
} from "../../src/hooks/use-subsequent-isomorphic-layout-effect"
import { createSubsequentEffectTests } from "../create-subsequent-effect-tests"
import { affect, describe } from "../helpers"

describe("createIsomorphicFunction", (it) => {
  it("should return the server argument if window doesn't exist", async () => {
    const useIsomorphicLayoutEffect = createIsomorphicFunction(
      useEffect,
      useLayoutEffect
    )

    assert.equal(useIsomorphicLayoutEffect, useEffect)
  })

  it("should return the client argument if window exists", async () => {
    const restoreWindow = affect(global, "window", "")
    const useIsomorphicLayoutEffect = createIsomorphicFunction(
      useEffect,
      useLayoutEffect
    )

    assert.equal(useIsomorphicLayoutEffect, useLayoutEffect)

    restoreWindow()
  })
})

createSubsequentEffectTests(
  "useSubsequentIsomorphicLayoutEffect",
  useSubsequentIsomorphicLayoutEffect,
  useIsomorphicLayoutEffect
)

describe("useSubsequentIsomorphicLayoutEffect", (it) => {
  it("shouldn't trigger a warning when run on the server", () => {
    const spy = spyOn(console, "error", () => {})

    renderHook(() => {
      useSubsequentLayoutEffect(() => {})

      useSubsequentIsomorphicLayoutEffect(() => {})
    })

    assert.equal(spy.callCount, 1)

    restoreAll()
  })
})
