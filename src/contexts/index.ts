/*
useContext + createContext
https://ja.reactjs.org/docs/hooks-reference.html#usecontext
https://ja.reactjs.org/docs/context.html
*/
import { createContext } from 'react'

import type { Dispatch, SetStateAction } from 'react'

export type ContextType = {
  user: {
    name: string
    isAuthed: boolean
  }
  setUserIdx: Dispatch<SetStateAction<number>>
}

export const UserContext = createContext<ContextType>({} as ContextType)
