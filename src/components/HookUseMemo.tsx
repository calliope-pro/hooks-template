/*
useMemo
https://ja.reactjs.org/docs/hooks-reference.html#usememo
*/
import { useMemo, useState } from 'react'

export const HookUseMemo: React.FC = () => {
  const [count1, setCount1] = useState(-10)
  const [count2, setCount2] = useState(10)

  function double(val: number) {
    console.log(2222)
    return val * 2
  }
  // [deps]が変わったときのみ呼ばれる
  // 無駄な再レンダーコストがなくなる
  // vueのcomputedみたいなもの
  const doubleCount2 = useMemo<number>(() => {
    return double(count2)
  }, [count2])
  return (
    <>
      <h1>Counter1: {count1}</h1>
      {/* 2222は表示されない */}
      <button onClick={() => setCount1((prev) => prev + 1)}>+1</button>
      <h1>
        Counter2: {count2}, Counter*2: {doubleCount2}
      </h1>
      {/* 2222が表示される */}
      <button onClick={() => setCount2((prev) => prev + 10)}>+10</button>
    </>
  )
}
