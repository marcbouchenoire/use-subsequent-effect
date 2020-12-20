import { useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils"

export const useSubsequentLayoutEffect = createSubsequentEffect(useLayoutEffect)
