import { useState } from 'react'
import {BrowserRouter as Router , Navigate, Route , Routes } from "react-router-dom";
// Add Page 
import StartApp from './page/start'
import Services from './page/services';
import Creator from './page/creator';
function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
       <Router>
        <Routes>
          <Route path="/" element={ <StartApp />}/>
          <Route path="/services" element={ <Services />}/>
          <Route path="/creator" element={ <Creator />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
     
    </body>
  )
}

export default App
