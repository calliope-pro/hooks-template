import Link from 'next/link'

import { HookUseCallback } from '@src/components/HookUseCallback'
import { HookUseContext } from '@src/components/HookUseContext'
import { HookUseDebugValue } from '@src/components/HookUseDebugValue'
import { HookUseEffect } from '@src/components/HookUseEffect'
import { HookUseMemo } from '@src/components/HookUseMemo'
import { HookUseReducer } from '@src/components/HookUseReducer'
import { HookUseRef } from '@src/components/HookUseRef'
import { HookUseState } from '@src/components/HookUseState'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Link href={`/id`}>id</Link>
      <br />
      <Link href="/">index</Link>
      <hr />
      <h5>useState</h5>
      <HookUseState />
      <hr />
      <h5>useEffect</h5>
      <HookUseEffect />
      <hr />
      <h5>useContext</h5>
      <HookUseContext />
      <hr />
      <h5>useReducer</h5>
      <HookUseReducer />
      <hr />
      <h5>useMemo</h5>
      <HookUseMemo />
      <hr />
      <h5>useCallback</h5>
      <HookUseCallback />
      <hr />
      <h5>useRef</h5>
      <HookUseRef />
      <hr />
      <h5>useDebugValue</h5>
      <HookUseDebugValue />
    </>
  )
}

export default Home
