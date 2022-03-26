/*
useCallback + React.memo
https://ja.reactjs.org/docs/hooks-reference.html#usecallback
https://qiita.com/syo19961113/items/967ed58a9d9b1a72131e
*/

import React, { useCallback, useMemo, useState } from 'react'

import type { MouseEvent, MouseEventHandler } from 'react'

type ChildPropType = {
  items: string[]
  onClick: MouseEventHandler
}

const Child: React.FC<ChildPropType> = ({ items, onClick }) => {
  console.log(5678)
  const ItemList = items.map((val, idx) => (
    <li key={val} onClick={onClick}>{`${idx}は${val}`}</li>
  ))
  return <>{ItemList}</>
}

// propsが変化しない限り、再レンダーされない
const MemoChild = React.memo(Child)

export const HookUseCallback: React.FC = () => {
  const [items, setItems] = useState(['A', 'B', 'C'])
  const [count, setCount] = useState(100)

  // itemsに依存する関数 -> 参照が一定
  // オーバーヘッドはその分大きい(基本的に使わない)
  const memoizedCallback = useCallback(() => {
    console.log(items.length)
  }, [items])
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <button onClick={() => setItems((prev) => prev.concat('D'))}>
        add D
      </button>
      <MemoChild items={items} onClick={memoizedCallback}></MemoChild>
    </>
  )
}
