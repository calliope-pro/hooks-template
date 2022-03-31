/*
useEffect (+ useState)
https://ja.reactjs.org/docs/hooks-reference.html#usestate
※ useLayoutEffectは同期的
*/
import { useEffect, useState } from 'react'

export const HookUseEffect: React.FC = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState('')
  // stateが変更時の副作用(副作用自体は初回レンダリングも実行される)
  useEffect(() => {
    if (count % 3 === 0 || count.toString().includes('3')) {
      setText(`アホの数${count}!`)
    } else {
      setText(`${count}は3の倍数ではないし3を含まない`)
    }
    return () => {
      // clean up function (2回目以降のレンダリング前・アンマウント時に呼ばれる)
      alert(`前回の数字は${count}でした`)
    }
    // 副作用の発火の依存関係指定
  }, [count])
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <h1>{text}</h1>
    </>
  )
}
