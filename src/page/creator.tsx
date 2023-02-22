import { useState } from 'react'
//Add Component
import GetTabbar from '../component/creator/tabbar'
GetTabbar
export default function Creator() {
  const [count, setCount] = useState(0)
  return (
    <body>
        <GetTabbar/>
    </body>
  )
}

