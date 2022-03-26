/*
useReducer
https://ja.reactjs.org/docs/hooks-reference.html#usereducer
*/
import { useReducer } from 'react'

export const HookUseReducer: React.FC = () => {
  function init(val: number) {
    return val
  }
  // useStateと似ているが
  // dispatchの画一化 => 継承しやすい
  // useStateでのsetCount((prev) => reducer(prev, newArgs))と同等
  function reducer(
    prev: number,
    action: { type?: 'inc' | 'dec'; start?: number },
  ) {
    switch (action.type) {
      case 'inc':
        return prev + 1
      case 'dec':
        return prev - 1
      default:
        return init(action.start ?? 50)
    }
  }
  // 遅延初期化無し
  // const [count, dispatchCount] = useReducer(reducer, 100)
  // 遅延
  const [count, dispatchCount] = useReducer(reducer, 100, init)
  return (
    <>
      <h1>100or70or50からのカウンター{count}</h1>
      <button
        onClick={() => {
          dispatchCount({ type: 'inc' })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatchCount({ type: 'dec' })
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatchCount({ start: 70 })
        }}
      >
        Reset to 70
      </button>
      <button
        onClick={() => {
          dispatchCount({})
        }}
      >
        bug btn
      </button>
    </>
  )
}
