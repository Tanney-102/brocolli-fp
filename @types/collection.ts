export type Collection<Value = any> = ArrayLike<Value> | Iterable<Value>

export type IterationCallback<Value> = (value: Value, index: number, collection: Collection<Value>) => void

export const isIterable = <Value = any>(collection: Collection<Value>): collection is Iterable<Value> =>
  (collection as Iterable<Value>)[Symbol.iterator] !== undefined

export const isArrayLike = <Value = any>(collection: Collection<Value>): collection is ArrayLike<Value> =>
  (collection as ArrayLike<Value>).length !== undefined
