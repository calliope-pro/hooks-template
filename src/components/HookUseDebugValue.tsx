import { useDebugValue, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

const useCustomHook = (): [number, Dispatch<SetStateAction<number>>] => {
  const [count, setCount] = useState(0)
  // カスタムフックにDevTools上のラベルを設定
  useDebugValue(count % 3 === 0 ? 'AHO-hook!' : 'normal-hook!')
  return [count, setCount]
}

export const HookUseDebugValue = () => {
  const [count, setCount] = useCustomHook()
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
}
