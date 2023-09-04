import { useState } from 'react';
import { RoutesMain } from './Routes/RoutesMain';
import "./Styles/index.scss";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RoutesMain />
    

      </div>

    </>
  )
}

export default App
