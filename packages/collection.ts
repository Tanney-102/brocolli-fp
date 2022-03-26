import { Collection, isArrayLike, isIterable, IterationCallback } from './@types'

const eachIterableCollection = <Value>(iterable: Iterable<Value>, iterationCallback: IterationCallback<Value>) => {
  let index = 0
  for (const item of iterable) {
    iterationCallback(item, index, iterable)
    index++
  }
}

const eachArrayLikeCollection = <Value>(arrayLike: ArrayLike<Value>, iterationCallback: IterationCallback<Value>) => {
  for (let index = 0; index < arrayLike.length; index++) {
    iterationCallback(arrayLike[index], index, arrayLike)
  }
}

export const each = <Value = any>(collection: Collection<Value>, iterationCallback: IterationCallback<Value>) => {
  if (isIterable(collection)) {
    eachIterableCollection(collection, iterationCallback)
    return
  }

  if (isArrayLike(collection)) {
    eachArrayLikeCollection(collection, iterationCallback)
    return
  }

  throw TypeError('collection should be ArrayLike or Iterable')
}

// filter
// map
// reduce
