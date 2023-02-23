import { useState } from 'react'
//Add Component
import NavbarMain from '../components/navbarMain'
import GetStart from '../components/sectionGetStart'
export default function StartApp() {
  const [count, setCount] = useState(0)
  return (
    <body>
     <NavbarMain />
     <GetStart />
    </body>
  )
}

