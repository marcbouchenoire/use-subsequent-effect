import { useLayoutEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

export const useSubsequentLayoutEffect = createSubsequentEffect(useLayoutEffect)
