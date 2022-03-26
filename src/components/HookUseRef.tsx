/*
useRef
https://ja.reactjs.org/docs/hooks-reference.html#useref
*/
import { useRef, useState } from 'react'

export const HookUseRef: React.FC = () => {
  // null -> return: MutableRefObject
  // const refContainer = useRef(null)
  // <Type> -> return: RefObject
  const refContainer = useRef<HTMLInputElement>(null)
  const [inputed, setInputed] = useState('')
  return (
    <>
      <h1>{inputed}</h1>
      <input type="text" placeholder="" ref={refContainer} />
      <button
        onClick={() => {
          setInputed(refContainer.current?.value || '')
          console.log(refContainer.current?.value)
        }}
      >
        log&display表示
      </button>
    </>
  )
}
