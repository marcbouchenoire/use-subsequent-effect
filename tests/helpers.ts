import { Test, suite } from "uvu"

type Describer = (test: Test) => Promise<void> | void

/**
 * Run multiple tests as a named suite.
 *
 * @param name - The name of the test suite.
 * @param callback - The test suite as a callback.
 */
export function describe(name: string, callback: Describer): void {
  const test = suite(name)
  callback(test)

  test.run()
}

/**
 * Disable or replace a property from an object.
 *
 * @param object - The object containing the property.
 * @param property - The property's name.
 * @param [replacement] - An optional replacement value.
 * @returns A function to restore the original value.
 */
export function affect<T>(
  object: T,
  property: keyof T,
  replacement: any = undefined
) {
  const origin = object[property]

  object[property] = replacement

  return () => {
    object[property] = origin
  }
}
