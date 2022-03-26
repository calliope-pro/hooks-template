/*
useState
https://ja.reactjs.org/docs/hooks-reference.html#usestate
*/
import { useState } from 'react'

export const HookUseState: React.FC = () => {
  // localなstateを管理
  const [isDisplay, setIsDisplay] = useState(true)
  // 遅延初期化は関数で渡す
  // const [isDisplay, setIsDisplay] = useState(true)
  return (
    <>
      <button
        onClick={() => {
          setIsDisplay((prev) => !prev)
        }}
      >
        切り替えボタン
      </button>
      {isDisplay && <h1>表示中</h1>}
    </>
  )
}
