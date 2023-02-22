import { useState } from 'react'
// Add Page 
import StartApp from './page/start'
function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <StartApp />
    </body>
  )
}

export default App
