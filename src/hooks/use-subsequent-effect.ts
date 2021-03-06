import { useEffect } from "react"
import { createSubsequentEffect } from "../utils/create-subsequent-effect"

export const useSubsequentEffect = createSubsequentEffect(useEffect)
