import { useState } from 'react'
//Add Component
import NavbarMain from '../components/navbarMain'
import GetServices from '../components/sectionGetServices'
export default function Services() {
  const [count, setCount] = useState(0)
  return (
    <body>
     <NavbarMain />
     <GetServices/>
    </body>
  )
}

