import { useState } from 'react'
//Add Component
import NavbarMain from '../component/navbarMain'
import GetServices from '../component/sectionGetServices'
export default function Services() {
  const [count, setCount] = useState(0)
  return (
    <body>
     <NavbarMain />
     <GetServices/>
    </body>
  )
}

