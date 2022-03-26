/*
useContext + createContext
https://ja.reactjs.org/docs/hooks-reference.html#usecontext
https://ja.reactjs.org/docs/context.html
*/
import { useContext } from 'react'

import { UserContext } from '@src/contexts'

export const HookUseContext: React.FC = () => {
  const { user, setUserIdx } = useContext(UserContext)
  return (
    <>
      <h1>
        {user.name}は{user.isAuthed ? 'ログイン済み' : '未認証'}
      </h1>
      <button
        onClick={() => {
          setUserIdx((prev) => 1 - prev)
        }}
      >
        change userIdx
      </button>
    </>
  )
  // !Not modern
  // equivalent code without hooks
  // return (
  //   <UserContext.Consumer>
  //     {({ user, setUserIdx }) => (
  //       <>
  //         <h1>
  //           {user.name}は{user.isAuthed ? 'ログイン済み' : '未認証'}
  //         </h1>
  //         <button
  //           onClick={() => {
  //             setUserIdx((prev) => 1 - prev)
  //           }}
  //         >
  //           change userIdx
  //         </button>
  //       </>
  //     )}
  //   </UserContext.Consumer>
  // )
}
