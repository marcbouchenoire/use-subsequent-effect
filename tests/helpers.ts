import { Test, suite } from "uvu"

type Describer = (test: Test) => Promise<void> | void

export function describe(name: string, hook: Describer): void {
  const test = suite(name)
  hook(test)

  test.run()
}

export function mock<T>(object: T, name: keyof T, mock: any = undefined) {
  const origin = object[name]

  object[name] = mock

  return () => {
    object[name] = origin
  }
}
