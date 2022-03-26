import { useState } from 'react'

import { UserContext } from '@src/contexts'
import '@src/styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const users = [
    { name: 'Taro', isAuthed: false },
    { name: 'Jiro', isAuthed: true },
  ]
  const [userIdx, setUserIdx] = useState(0)
  return (
    <UserContext.Provider
      value={{ user: users[userIdx], setUserIdx: setUserIdx }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
