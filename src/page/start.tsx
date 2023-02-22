import { useState } from 'react'
//Add Component
import NavbarMain from '../component/navbarMain'
import GetStart from '../component/sectionGetStart'
export default function StartApp() {
  const [count, setCount] = useState(0)
  return (
    <body>
     <NavbarMain />
     <GetStart />
    </body>
  )
}

