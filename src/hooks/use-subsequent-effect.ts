import { useEffect } from "react"
import { createSubsequentEffect } from "../utils"

export const useSubsequentEffect = createSubsequentEffect(useEffect)
