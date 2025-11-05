import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import VerticalTimelineAccordion from './Accordian'
import VerticalTimelineAccordion2 from './Accordian/Accordian2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/accordian/" >
  <Routes>
    <Route path = '' element = {<VerticalTimelineAccordion2 />} />
    <Route path = 'acc' element = {<VerticalTimelineAccordion />} />
      {/* <VerticalTimelineAccordion /> */}
      
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
