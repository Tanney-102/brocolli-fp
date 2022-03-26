import { Collection } from './@types'
import { each } from './collection'

function* rangeIterableGenerator(length: number) {
  for (let i = 0; i < length; i++) {
    yield i
  }
}

describe('Collection Utils Test >', () => {
  const TEST_LENGTH = 10

  describe('each >', () => {
    const iterationCallback = jest.fn()

    it('should call iteration callback for each item of iterable', () => {
      const iterable = rangeIterableGenerator(TEST_LENGTH)

      each(iterable, iterationCallback)
      iterationCallback.mock.calls.forEach((call, index) => {
        expect(call[0]).toBe(index)
        expect(call[1]).toBe(index)
        expect(call[2]).toBe(iterable)
      })
    })

    it('should call iteration callback for each item of arraylike', () => {
      const arrayLike = { length: TEST_LENGTH }

      each(arrayLike, iterationCallback)
      iterationCallback.mock.calls.forEach((call, index) => {
        expect(call[0]).toBe(undefined)
        expect(call[1]).toBe(index)
        expect(call[2]).toBe(arrayLike)
      })
    })

    it('non collection type error', () => {
      const nonCollectionObject = {}
      expect(() => each(nonCollectionObject as Collection, iterationCallback)).toThrow(TypeError)
    })
  })
})
